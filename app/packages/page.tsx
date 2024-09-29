"use client";
import { CircleUser, Menu, Package2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { use, useEffect, useState } from "react";
export const description =
  "An application shell with a header and main content area. The header has a navbar, a search input and and a user nav dropdown. The user nav is toggled by a button with an avatar image.";

interface Package {

  id: string;
  serviceName: string;
  price: number;
  description: string;
}


function Packages() {

  const [packageList, setPackageList] = useState([] as Package[]);
  
  useEffect(() => {
    // fetch("/api/packages")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setPackageList(data);
    //   });
    setPackageList([
      {
        id: "66f6bdb2fcc6c87d7df2a6a8",
        serviceName: "Roaming",
        price: 1500,
        description: "Roaming Unlimited for all countries",
      },
      {
        id: "66f6bdb2fcc6c87d7df2a6a8",
        serviceName: "Roaming",
        price: 1500,
        description: "Roaming Unlimited for all countries",
      },
      {
        id: "66f6bdb2fcc6c87d7df2a6a8",
        serviceName: "Roaming",
        price: 1500,
        description: "Roaming Unlimited for all countries",
      },
      {
        id: "66f6bdb2fcc6c87d7df2a6a8",
        serviceName: "Roaming",
        price: 1500,
        description: "Roaming Unlimited for all countries",
      },
    ]);
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
            className="text-foreground transition-colors hover:text-foreground"
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
        <Card x-chunk="dashboard-01-chunk-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="flex flex-row items-center justify-between">
              Packages
            </CardTitle>
          </CardHeader>
          <br />
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
              {
                packageList.map((pkg) => (
                  <Card x-chunk="dashboard-01-chunk-0">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"></CardHeader>
                    <CardContent>
                      <Button asChild variant="ghost">
                        <a href="#">
                          <div className="text-2xl font-bold">{pkg.serviceName}</div>
                        </a>
                      </Button>
                      <p className="text-xs text-muted-foreground">
                        {pkg.description}
                      </p>
                      <br />
                      <div className="flex items-center space-x-2">
                        <Switch id="airplane-mode" />
                        <Label htmlFor="airplane-mode">Activate</Label>
                      </div>
                    </CardContent>
                  </Card>
                ))
              }

              {/* <Card x-chunk="dashboard-01-chunk-0">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"></CardHeader>
                <CardContent>
                  <Button asChild variant="ghost">
                    <a href="#">
                      <div className="text-2xl font-bold">Extra GB</div>
                    </a>
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    +20.1% from last month
                  </p>
                  <br />
                  <div className="flex items-center space-x-2">
                    <Switch id="airplane-mode" />
                    <Label htmlFor="airplane-mode">Activate</Label>
                  </div>
                </CardContent>
              </Card> */}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

export default Packages;
