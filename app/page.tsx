"use client";
import { CircleUser, Menu, Package2, TrendingUp } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import withAuth from "@/components/ui/withAuth";
import useApiRequest from "@/components/ui/useApiResquest";
import PaymentModal from "@/components/ui/Payment";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { PolarRadiusAxis } from "recharts";
import { RadialBarChart, PolarGrid, RadialBar, Label } from "recharts";
import Packages from "./packages/page";

export const description =
  "An application shell with a header and main content area. The header has a navbar, a search input and and a user nav dropdown. The user nav is toggled by a button with an avatar image.";

const chartData = [
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
];

interface BillData {
  id: string;
  userId: string;
  amount: number;
  invoiceNumber: string;
  status: string;
  billingDate: string;
  dueDate: string;
}

const hardcodedAmount = 1500;

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

function Dashboard() {
  const [billData, setBillData] = useState<BillData | null>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const { token, logout, decodedToken } = useAuth();
  const apiUrl = `http://localhost:8222/api/v1/billing/0718049940`;

  const { response, error, loading } = useApiRequest({
    token,
    apiUrl,
    method: "GET",
  });

  useEffect(() => {
    if (response) {
      setBillData(response[0] as BillData);
    }
  }, [response]);

  const router = useRouter();
  const handleRedirect = useCallback((path: string) => {
    router.push(path);
  }, [router]);

  const formattedBillData = useMemo(() => {
    if (billData) {
      return {
        ...billData,
        amount: billData.amount, // Format the amount
      };
    }
    return null;
  }, [billData]);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <a
            href="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Package2 className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </a>
          <a
            href="/"
            className="text-foreground transition-colors hover:text-foreground"
          >
            Dashboard
          </a>
          <a
            href="/packages"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Packages
          </a>
          <a
            href="/billing"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Billing
          </a>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <a
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </a>
              <a href="#" className="hover:text-foreground">
                Dashboard
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Orders
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Products
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Customers
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Analytics
              </a>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <div className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">{decodedToken?.email}</div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"></CardHeader>
            <CardContent>
              <Button asChild variant="ghost">
                <a href="#">
                  <div className="text-2xl font-bold">Extra GB</div>
                </a>
              </Button>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"></CardHeader>
            <CardContent>
              <Button asChild variant="ghost">
                <a href="#">
                  <div className="text-2xl font-bold">Data AddOn</div>
                </a>
              </Button>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"></CardHeader>
            <CardContent>
              <Button asChild variant="ghost">
                <a href="packages">
                  <div className="text-2xl font-bold">Data Packages</div>
                </a>
              </Button>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"></CardHeader>
            <CardContent>
              <Button asChild variant="ghost">
                <a href="#">
                  <div className="text-2xl font-bold">Bonus Data</div>
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle className="flex flex-row items-center justify-between">
                  Data Usage
                </CardTitle>
                <CardDescription>Remain data for your package</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Card className="flex flex-col">
                <CardHeader className="items-center pb-0">
                  <CardTitle>Day Time</CardTitle>
                  <CardDescription>January - June 2024</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 pb-0">
                  <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                  >
                    <RadialBarChart
                      data={chartData}
                      startAngle={0}
                      endAngle={250}
                      innerRadius={80}
                      outerRadius={110}
                    >
                      <PolarGrid
                        gridType="circle"
                        radialLines={false}
                        stroke="none"
                        className="first:fill-muted last:fill-background"
                        polarRadius={[86, 74]}
                      />
                      <RadialBar
                        dataKey="visitors"
                        background
                        cornerRadius={10}
                      />
                      <PolarRadiusAxis
                        tick={false}
                        tickLine={false}
                        axisLine={false}
                      >
                        <Label
                          content={({ viewBox }) => {
                            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                              return (
                                <text
                                  x={viewBox.cx}
                                  y={viewBox.cy}
                                  textAnchor="middle"
                                  dominantBaseline="middle"
                                >
                                  <tspan
                                    x={viewBox.cx}
                                    y={viewBox.cy}
                                    className="fill-foreground text-4xl font-bold"
                                  >
                                    {chartData[0].visitors.toLocaleString()}
                                  </tspan>
                                  <tspan
                                    x={viewBox.cx}
                                    y={(viewBox.cy || 0) + 24}
                                    className="fill-muted-foreground"
                                  >
                                    GB
                                  </tspan>
                                </text>
                              );
                            }
                          }}
                        />
                      </PolarRadiusAxis>
                    </RadialBarChart>
                  </ChartContainer>
                </CardContent>
                <CardFooter className="flex-col gap-2 text-sm">
                  <div className="leading-none text-muted-foreground">
                    Showing remain DayTime data for this month.
                  </div>
                </CardFooter>
              </Card>
            </CardContent>
          </Card>

          <Card x-chunk="dashboard-01-chunk-5">
            <CardHeader>
              <CardTitle>Billing</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
              <div className="flex items-center gap-4">
                Bill Date : <Badge>{billData?.billingDate}</Badge>
              </div>
              <div className="flex items-center gap-4">
                Bill Due Date : <Badge>{billData?.dueDate}</Badge>
              </div>
              <div className="flex items-center gap-4">
                Status : <Badge>{billData?.status}</Badge>
              </div>
              <div className="flex items-center gap-4">
                Total Payable : <Badge>{billData?.amount}</Badge>
              </div>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  onClick={() => handleRedirect("/billing")}
                >
                  Bill History
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowPaymentModal(true)} // Open the modal
                >
                  Pay Now
                </Button>
              </div>
            </CardContent>
            {/* {token}
            {decodedToken?.email}
            {decodedToken?.username}
            {decodedToken?.Sritel_No} */}
          </Card>
        </div>
      </main>

      {/* Payment Modal */}
      {showPaymentModal && (
        <PaymentModal
          isOpen={showPaymentModal}
          onClose={() => setShowPaymentModal(false)} // Close the modal
          billId="66f6bfc4ce84b621776316f1"
          amount={hardcodedAmount}
        />
      )}
    </div>
  );
}

export default withAuth(Dashboard);
