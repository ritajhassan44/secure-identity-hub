import { Users, ShieldCheck, Activity, TrendingUp } from "lucide-react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  {
    name: "Total Users",
    value: "12,847",
    change: "+12.5%",
    changeType: "positive",
    icon: Users,
  },
  {
    name: "Active Sessions",
    value: "1,429",
    change: "+4.3%",
    changeType: "positive",
    icon: Activity,
  },
  {
    name: "Auth Success Rate",
    value: "99.8%",
    change: "+0.2%",
    changeType: "positive",
    icon: ShieldCheck,
  },
  {
    name: "API Requests",
    value: "2.4M",
    change: "+18.7%",
    changeType: "positive",
    icon: TrendingUp,
  },
];

const recentActivity = [
  { user: "john@example.com", action: "Logged in", time: "2 minutes ago", status: "success" },
  { user: "jane@company.com", action: "Password reset", time: "15 minutes ago", status: "success" },
  { user: "admin@corp.com", action: "Failed login attempt", time: "1 hour ago", status: "error" },
  { user: "user@domain.com", action: "Account created", time: "2 hours ago", status: "success" },
  { user: "test@example.com", action: "Role updated", time: "3 hours ago", status: "success" },
];

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back! Here's an overview of your authentication system.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.name} className="bg-card border-border hover:border-primary/30 transition-colors">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.name}
                </CardTitle>
                <div className="p-2 rounded-lg bg-primary/10">
                  <stat.icon className="w-4 h-4 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <p className="text-xs text-success mt-1">
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Activity */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-foreground">
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 border-b border-border last:border-0"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        activity.status === "success"
                          ? "bg-success"
                          : "bg-destructive"
                      }`}
                    />
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {activity.user}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {activity.action}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {activity.time}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
