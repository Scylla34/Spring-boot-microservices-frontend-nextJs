import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  CircleCheck,
  FileText,
  MoreHorizontal,
  Package,
  Plus,
  TrendingDown,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface StatItem {
  label: string;
  value: string;
  change: string;
  period: string;
  trend: "up" | "down";
}

interface MonthRevenue {
  month: string;
  revenue: number;
  expenses: number;
}

type OrderStatus = "Confirmed" | "Processing" | "Shipped";

interface Order {
  id: string;
  customer: string;
  date: string;
  amount: string;
  status: OrderStatus;
}

interface AttentionItem {
  title: string;
  detail: string;
  tone: "warning" | "danger" | "success";
  icon: LucideIcon;
}

interface Task {
  title: string;
  detail: string;
}

const stats: StatItem[] = [
  { label: "Total revenue", value: "$128,450", change: "+12.8%", period: "vs. last month", trend: "up" },
  { label: "Operating expenses", value: "$42,680", change: "−4.2%", period: "vs. last month", trend: "up" },
  { label: "Open orders", value: "148", change: "−24", period: "this month", trend: "down" },
  { label: "Cash balance", value: "$85,770", change: "+8.6%", period: "vs. last month", trend: "up" },
];

const monthlyRevenue: MonthRevenue[] = [
  { month: "Jun", revenue: 48, expenses: 29 },
  { month: "Jul", revenue: 56, expenses: 34 },
  { month: "Aug", revenue: 53, expenses: 31 },
  { month: "Sep", revenue: 64, expenses: 36 },
  { month: "Oct", revenue: 70, expenses: 35 },
  { month: "Nov", revenue: 78, expenses: 34 },
];

const attentionItems: AttentionItem[] = [
  { title: "Low stock on 8 items", detail: "Reorder before you run low.", tone: "warning", icon: Package },
  { title: "5 invoices are overdue", detail: "$4,250 awaiting payment.", tone: "danger", icon: FileText },
  { title: "3 purchase orders to approve", detail: "Keep your team moving.", tone: "success", icon: CircleCheck },
];

const orders: Order[] = [
  { id: "#SO-1048", customer: "Olive & Oak", date: "Nov 18, 2026", amount: "$2,450.00", status: "Confirmed" },
  { id: "#SO-1047", customer: "Studio North", date: "Nov 18, 2026", amount: "$1,280.00", status: "Processing" },
  { id: "#SO-1046", customer: "Forma Supply", date: "Nov 17, 2026", amount: "$3,620.00", status: "Shipped" },
  { id: "#SO-1045", customer: "The Good Company", date: "Nov 17, 2026", amount: "$895.00", status: "Confirmed" },
];

const tasks: Task[] = [
  { title: "Review supplier invoices", detail: "Finance · Today, 11:00 AM" },
  { title: "Confirm weekly payroll", detail: "People · Today, 2:00 PM" },
  { title: "Plan inventory replenishment", detail: "Inventory · Today, 4:30 PM" },
];

function RevenueChart() {
  return (
    <Card className="panel-card">
      <CardHeader>
        <div className="panel-heading">
          <div>
            <h2>Revenue &amp; expenses</h2>
            <p>A healthy month, moving in the right direction.</p>
          </div>
          <div className="chart-controls">
            <div className="chart-legend" aria-label="Chart legend">
              <span className="legend-item"><span className="legend-dot revenue" />Revenue</span>
              <span className="legend-item"><span className="legend-dot expenses" />Expenses</span>
            </div>
            <label className="chart-period">
              <span className="sr-only">Chart period</span>
              <select defaultValue="Monthly">
                <option>Monthly</option>
                <option>Quarterly</option>
                <option>Yearly</option>
              </select>
              <ChevronDown size={11} aria-hidden="true" />
            </label>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="chart-area" role="img" aria-label="Revenue and expenses from June through November">
          <div className="chart-y-axis" aria-hidden="true">
            <span>$15k</span><span>$10k</span><span>$5k</span><span>$0</span>
          </div>
          <div className="chart-plot">
            {monthlyRevenue.map((month, index) => (
              <div className="chart-month" key={month.month}>
                <div
                  className={`chart-bar revenue${index === monthlyRevenue.length - 1 ? " current" : ""}`}
                  style={{ height: `${month.revenue}%` }}
                />
                <div className="chart-bar expenses" style={{ height: `${month.expenses}%` }} />
                <span className="chart-month-label" style={{ left: `${((index + 0.5) / monthlyRevenue.length) * 100}%` }}>
                  {month.month}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function AttentionPanel() {
  return (
    <Card className="panel-card">
      <CardHeader>
        <div className="panel-heading">
          <div>
            <h2>Needs attention</h2>
            <p>A few things to keep things flowing.</p>
          </div>
          <span className="attention-count">03</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="attention-list">
          {attentionItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link className="attention-item" href="/reports" key={item.title}>
                <span className={`attention-icon ${item.tone}`}><Icon size={13} aria-hidden="true" /></span>
                <span className="attention-copy"><strong>{item.title}</strong><small>{item.detail}</small></span>
                <ChevronRight size={13} aria-hidden="true" />
              </Link>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

function RecentOrders() {
  return (
    <Card className="panel-card orders-card">
      <CardHeader>
        <div className="panel-heading">
          <div>
            <h2>Recent orders</h2>
            <p>The latest from your sales desk.</p>
          </div>
          <Link className="panel-action" href="/sales">View all orders <ArrowRight size={12} /></Link>
        </div>
      </CardHeader>
      <CardContent>
        <div className="orders-table">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead><span className="sr-only">Open order</span></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="order-id">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{order.amount}</TableCell>
                  <TableCell>
                    <Badge className={`status-badge status-${order.status.toLowerCase()}`}>{order.status}</Badge>
                  </TableCell>
                  <TableCell><ChevronRight size={12} aria-hidden="true" /></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}

function UpcomingTasks() {
  return (
    <Card className="panel-card">
      <CardHeader>
        <div className="panel-heading">
          <div>
            <h2>Upcoming tasks</h2>
            <p>Your next small steps.</p>
          </div>
          <Link className="panel-action" href="/people">View all <ArrowRight size={12} /></Link>
        </div>
      </CardHeader>
      <CardContent>
        <div className="task-tabs" aria-label="Task timeframe">
          <button className="task-tab active" type="button" aria-pressed="true">Today · 3</button>
          <button className="task-tab" type="button" aria-pressed="false">This week</button>
        </div>
        <div className="task-list">
          {tasks.map((task) => (
            <label className="task-row" key={task.title}>
              <input type="checkbox" />
              <span><strong>{task.title}</strong><small>{task.detail}</small></span>
            </label>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function Home() {
  return (
    <>
      <section className="dashboard-heading">
        <div>
          <h1>Your business at a glance</h1>
          <p>A clear view of your numbers, orders, and what&apos;s next.</p>
        </div>
        <div className="heading-actions">
          <label className="date-filter">
            <CalendarDays size={13} aria-hidden="true" />
            <span className="sr-only">Date range</span>
            <select defaultValue="Nov 1 – 30, 2026">
              <option>Nov 1 – 30, 2026</option>
              <option>Oct 1 – 31, 2026</option>
              <option>Sep 1 – 30, 2026</option>
            </select>
            <ChevronDown size={12} aria-hidden="true" />
          </label>
          <Button className="create-button" type="button">
            <Plus size={14} />
            Create new
            <ChevronDown className="create-chevron" size={12} />
          </Button>
        </div>
      </section>

      <section className="stats-grid" aria-label="Business metrics">
        {stats.map((stat) => {
          const TrendIcon = stat.trend === "up" ? TrendingUp : TrendingDown;
          return (
            <Card className="stat-card" key={stat.label}>
              <CardContent>
                <div className="stat-topline">
                  <span className="stat-label">{stat.label}</span>
                  <Button variant="ghost" size="icon-xs" aria-label={`More options for ${stat.label}`}>
                    <MoreHorizontal size={14} />
                  </Button>
                </div>
                <strong className="stat-value">{stat.value}</strong>
                <div className="stat-bottomline">
                  <span className={`stat-change${stat.trend === "down" ? " down" : ""}`}>
                    <TrendIcon size={10} aria-hidden="true" />{stat.change}
                  </span>
                  <span className="stat-period">{stat.period}</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </section>

      <section className="dashboard-grid" aria-label="Revenue and alerts">
        <RevenueChart />
        <AttentionPanel />
      </section>

      <section className="dashboard-grid bottom-grid" aria-label="Orders and tasks">
        <RecentOrders />
        <UpcomingTasks />
      </section>
    </>
  );
}
