

import { getUserSession } from "@/lib/core/session";
import { LayoutSideContentLeft, Bell, Briefcase, Envelope, Gear, House, Magnifier, Person, Bookmark, FileText, CreditCard } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import { Building, Users } from "lucide-react";
import Link from "next/link";

export async function DashboardSidebar() {

    const user = await getUserSession();

    const recruiterNavLinks = [
        { icon: House, href: "/dashboard/recruiter", label: "Overview" },
        { icon: Magnifier, href: "/dashboard/recruiter/jobs", label: "Manage Opportunities" },
        { icon: Bell, href: "/dashboard/recruiter/jobs/new", label: "Add Opportunity" },
        { icon: Briefcase, href: "/dashboard/recruiter/company", label: "My Startup" },

    ]

    const seekerNavLinks = [
        { icon: House, href: "/dashboard/seeker", label: "Overview" },
        { icon: Magnifier, href: "/jobs", label: "Opportunities" },
        { icon: FileText, href: "/dashboard/seeker/applications", label: "My Applications" },
    
      
    ];

    const adminNavLinks = [
        { icon: House, href: "/dashboard/admin", label: "Overview" },
        { icon: Users, href: "/dashboard/admin/users", label: "Manage Users" },
        { icon: Building, href: "/dashboard/admin/companies", label: "Manage Startups" },
        { icon: CreditCard, href: "/dashboard/admin/payments", label: "Transaction" },
    ];

    const navLinksMap = {
        seeker: seekerNavLinks,
        recruiter: recruiterNavLinks,
        admin: adminNavLinks
    }

    // Admin plugin uses 'role' for admin; seekers/recruiters use the custom 'userRole' field.
    const effectiveRole = user?.role === 'admin' ? 'admin' : (user?.role || 'seeker');
    const navItems = navLinksMap[effectiveRole] ?? seekerNavLinks;


    const navContent = <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
            <Link
                key={item.label}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                href={item.href}
            >
                <item.icon className="size-5 text-muted" />
                {item.label}
            </Link>
        ))}
    </nav>

    return (
        <>
            <aside className="hidden w-64 shrink-0 border-r border-default p-4 lg:block">
                {navContent}
            </aside>
            <Drawer>
                <Button className="lg:hidden" variant="secondary">
                    <LayoutSideContentLeft />
                    Sidebar
                </Button>
                <Drawer.Backdrop>
                    <Drawer.Content placement="left">
                        <Drawer.Dialog>
                            <Drawer.CloseTrigger />
                            <Drawer.Header>
                                <Drawer.Heading>Navigation</Drawer.Heading>
                            </Drawer.Header>
                            <Drawer.Body>
                                {navContent}
                            </Drawer.Body>
                        </Drawer.Dialog>
                    </Drawer.Content>
                </Drawer.Backdrop>
            </Drawer>
        </>
    );
}