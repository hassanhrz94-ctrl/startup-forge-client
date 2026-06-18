import Link from "next/link";
import { Button, Chip, Table, Tooltip } from "@heroui/react";
import { Eye, Edit2, Trash2, Plus } from "lucide-react";
import { getCompanyJobs } from "@/lib/api/jobs";

const RecruiterOpportunities = async () => {
  const companyId = "company_123";

  const opportunities = (await getCompanyJobs(companyId)) || [];

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "active":
        return "success";
      case "inactive":
        return "danger";
      default:
        return "warning";
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6">

      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">

        <div>
          <h1 className="text-2xl md:text-3xl font-bold">
            Manage Opportunities
          </h1>
          <p className="text-sm text-default-500 mt-1">
            View, edit and manage all opportunity postings.
          </p>
        </div>

        <Link href="/dashboard/recruiter/jobs/new">
          <Button color="primary" startContent={<Plus size={18} />}>
            Add Opportunity
          </Button>
        </Link>

      </div>

      {/* Table Card */}
      <div className="border border-default-200 rounded-xl overflow-hidden bg-content1">

        {/* ✅ HeroUI v3 — compound pattern: Table > Table.ScrollContainer > Table.Content */}
        <Table>
          <Table.ScrollContainer minWidth={600}>
            <Table.Content
              aria-label="Manage opportunities"
              isStriped
            >

              <Table.Header>
                <Table.Column>ROLE TITLE</Table.Column>
                <Table.Column>WORK TYPE</Table.Column>
                <Table.Column>COMMITMENT</Table.Column>
                <Table.Column>DEADLINE</Table.Column>
                <Table.Column>STATUS</Table.Column>
                <Table.Column>ACTIONS</Table.Column>
              </Table.Header>

              <Table.Body
                emptyContent={"No opportunities found."}
              >
                {opportunities.map((opportunity) => (
                  <Table.Row id={opportunity._id} key={opportunity._id}>

                    {/* Role Title */}
                    <Table.Cell>
                      <div className="flex flex-col">
                        <span className="font-semibold">
                          {opportunity.roleTitle}
                        </span>
                        <span className="text-xs text-default-500 truncate max-w-[250px]">
                          {opportunity.requiredSkills}
                        </span>
                      </div>
                    </Table.Cell>

                    {/* Work Type */}
                    <Table.Cell>
                      <Chip size="sm" variant="flat">
                        {opportunity.workType}
                      </Chip>
                    </Table.Cell>

                    {/* Commitment */}
                    <Table.Cell>
                      <span className="capitalize">
                        {opportunity.commitmentLevel}
                      </span>
                    </Table.Cell>

                    {/* Deadline */}
                    <Table.Cell>
                      {opportunity.deadline}
                    </Table.Cell>

                    {/* Status */}
                    <Table.Cell>
                      <Chip
                        size="sm"
                        variant="flat"
                        color={getStatusColor(opportunity.status)}
                      >
                        {opportunity.status}
                      </Chip>
                    </Table.Cell>

                    {/* Actions */}
                    <Table.Cell>
                      <div className="flex items-center gap-2">

                        <Tooltip content="View Opportunity">
                          <Button isIconOnly size="sm" variant="light">
                            <Eye size={16} />
                          </Button>
                        </Tooltip>

                        <Tooltip content="Edit Opportunity">
                          <Button isIconOnly size="sm" variant="light">
                            <Edit2 size={16} />
                          </Button>
                        </Tooltip>

                        <Tooltip content="Delete Opportunity">
                          <Button isIconOnly size="sm" variant="light" color="danger">
                            <Trash2 size={16} />
                          </Button>
                        </Tooltip>

                      </div>
                    </Table.Cell>

                  </Table.Row>
                ))}
              </Table.Body>

            </Table.Content>
          </Table.ScrollContainer>
        </Table>

      </div>
    </div>
  );
};

export default RecruiterOpportunities;