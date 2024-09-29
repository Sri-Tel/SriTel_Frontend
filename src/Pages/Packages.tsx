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
export const description =
  "An application shell with a header and main content area. The header has a navbar, a search input and and a user nav dropdown. The user nav is toggled by a button with an avatar image.";

function Packages() {
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
            href="#"
            className="text-foreground transition-colors hover:text-foreground"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Orders
          </a>
          <a
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Products
          </a>
          <a
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Customers
          </a>
          <a
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Analytics
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
        <card x-chunk="dashboard-01-chunk-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="flex flex-row items-center justify-between">
              Packages
            </CardTitle>
          </CardHeader>
          <br />
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
              <Card x-chunk="dashboard-01-chunk-0">
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
              </Card>
              <Card x-chunk="dashboard-01-chunk-1">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"></CardHeader>
                <CardContent>
                  <Button asChild variant="ghost">
                    <a href="#">
                      <div className="text-2xl font-bold">Data AddOn</div>
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
              </Card>
              <Card x-chunk="dashboard-01-chunk-2">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"></CardHeader>
                <CardContent>
                  <Button asChild variant="ghost">
                    <a href="#">
                      <div className="text-2xl font-bold">Data Packages</div>
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
              </Card>
              <Card x-chunk="dashboard-01-chunk-3">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"></CardHeader>
                <CardContent>
                  <Button asChild variant="ghost">
                    <a href="#">
                      <div className="text-2xl font-bold">Bonus Data</div>
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
              </Card>
              <Card x-chunk="dashboard-01-chunk-3">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"></CardHeader>
                <CardContent>
                  <Button asChild variant="ghost">
                    <a href="#">
                      <div className="text-2xl font-bold">Bonus Data</div>
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
              </Card>

              <Card x-chunk="dashboard-01-chunk-3">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"></CardHeader>
                <CardContent>
                  <Button asChild variant="ghost">
                    <a href="#">
                      <div className="text-2xl font-bold">Bonus Data</div>
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
              </Card>

              <Card x-chunk="dashboard-01-chunk-3">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"></CardHeader>
                <CardContent>
                  <Button asChild variant="ghost">
                    <a href="#">
                      <div className="text-2xl font-bold">Bonus Data</div>
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
              </Card>

              <Card x-chunk="dashboard-01-chunk-3">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"></CardHeader>
                <CardContent>
                  <Button asChild variant="ghost">
                    <a href="#">
                      <div className="text-2xl font-bold">Bonus Data</div>
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
              </Card>

              <Card x-chunk="dashboard-01-chunk-3">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"></CardHeader>
                <CardContent>
                  <Button asChild variant="ghost">
                    <a href="#">
                      <div className="text-2xl font-bold">Bonus Data</div>
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
              </Card>

              <Card x-chunk="dashboard-01-chunk-3">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"></CardHeader>
                <CardContent>
                  <Button asChild variant="ghost">
                    <a href="#">
                      <div className="text-2xl font-bold">Bonus Data</div>
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
              </Card>

              <Card x-chunk="dashboard-01-chunk-3">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"></CardHeader>
                <CardContent>
                  <Button asChild variant="ghost">
                    <a href="#">
                      <div className="text-2xl font-bold">Bonus Data</div>
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
              </Card>

              <Card x-chunk="dashboard-01-chunk-3">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"></CardHeader>
                <CardContent>
                  <Button asChild variant="ghost">
                    <a href="#">
                      <div className="text-2xl font-bold">Bonus Data</div>
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
              </Card>
            </div>
          </CardContent>
        </card>
      </main>
    </div>
  );
}

export default Packages;
