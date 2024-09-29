"use client";
import { CircleUser, Menu, MoreHorizontal, Package2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";
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

import { ChartConfig } from "@/components/ui/chart";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { use, useEffect, useState } from "react";


export const description =
  "An application shell with a header and main content area. The header has a navbar, a search input and and a user nav dropdown. The user nav is toggled by a button with an avatar image.";

interface Bill {
  id: string;
  userId: string;
  amount: number;
  invoiceNumber: string;
  status: string;
  billingDate: string;
  dueDate: string;
}

function BillList() {

  const [billingList, setBillingList] = useState([] as Bill[]);

  useEffect(() => {
    // fetch("/api/billing")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setBillingList(data);
    //   });
    setBillingList([{
      id: "1",
      userId: "1",
      amount: 499.99,
      invoiceNumber: "INV-123",
      status: "Paid",
      billingDate: "2023-07-12 10:42 AM",
      dueDate: "2023-07-12 10:42 AM",
    },
    {
      id: "2",
      userId: "1",
      amount: 499.99,
      invoiceNumber: "INV-123",
      status: "Paid",
      billingDate: "2023-07-12 10:42 AM",
      dueDate: "2023-07-12 10:42 AM",
    },
    {
      id: "3",
      userId: "1",
      amount: 499.99,
      invoiceNumber: "INV-123",
      status: "Paid",
      billingDate: "2023-07-12 10:42 AM",
      dueDate: "2023-07-12 10:42 AM",
    }
  ])
  }, []);


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
            className="text-muted-foreground transition-colors hover:text-foreground"
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
            className="text-foreground transition-colors hover:text-foreground"
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
            <div className="relative"></div>
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
         <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle>Bill History</CardTitle>
                  <CardDescription>
                    Access your past bills from here.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="hidden w-[100px] sm:table-cell">
                          <span className="sr-only">Image</span>
                        </TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="hidden md:table-cell">
                          Price
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Recieved at
                        </TableHead>
                        <TableHead>
                          <span className="sr-only">Actions</span>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {
                        billingList.map((bill) => (
                          <TableRow key={bill.id}>
                            <TableCell className="hidden sm:table-cell">
                              <img
                                className="aspect-square rounded-md object-cover"
                                height="32"
                                src="/bill-payment.png"
                                width="32"
                              />
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              {bill.invoiceNumber}
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline">{bill.status}</Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              {bill.amount}
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              {bill.billingDate}
                            </TableCell>
                            <TableCell>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button
                                    aria-haspopup="true"
                                    size="icon"
                                    variant="ghost"
                                  >
                                    <MoreHorizontal className="h-4 w-4" />
                                    <span className="sr-only">Toggle menu</span>
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                  <DropdownMenuItem>View</DropdownMenuItem>
                                  <DropdownMenuItem>Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))
                      }
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
      </main>
    </div>
  );
}

export default BillList;
