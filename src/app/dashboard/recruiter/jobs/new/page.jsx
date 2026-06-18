"use client";

import React, { useState } from "react";
import {
    Form,
    Fieldset,
    TextField,
    Label,
    Input,
    TextArea,
    FieldError,
    Select,
    ListBox,
    Switch,
    Button,
    toast
} from "@heroui/react";
import { Briefcase, Globe } from "@gravity-ui/icons";
import { createJob } from "@/lib/actions/jobs";
import { redirect } from "next/navigation";

export default function PostJobPage() {
    // Mock configuration for recruiter's authenticated state
    const [mockCompany] = useState({
        name: "Acme Corp (Auto-filled)",
        id: "company_123",
        isApproved: true,
    });

    const [isRemote, setIsRemote] = useState(false);
    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!mockCompany.isApproved) {
            alert("Your company profile must be approved before you can post jobs.");
            return;
        }

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const newErrors = {};
        if (!data.roleTitle) newErrors.roleTitle = "Role title is required";
if (!data.requiredSkills) newErrors.requiredSkills = "Required skills are required";
if (!data.workType) newErrors.workType = "Work type is required";
if (!data.commitmentLevel) newErrors.commitmentLevel = "Commitment level is required";
if (!data.deadline) newErrors.deadline = "Deadline is required";
        console.log("Validation errors:", newErrors);
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});

        const payload = {
            ...data,
            isRemote,
            companyId: mockCompany.id,
            status: "active",
            isPubliclyVisible: true,
        };

        const res = await createJob(payload);
        if (res.insertedId) {
            toast.success("Job posted successfully!");
            e.target.reset();
            setIsRemote(false);
            redirect("/dashboard/recruiter/jobs");
        }
    };

    // Dark styles styled to match your image_988c20.png reference layout
    const textInputClass = "w-full text-white bg-[#1c1c1e] border border-zinc-800 hover:bg-[#242426] focus:border-zinc-600 rounded-lg h-12 px-3 text-sm placeholder:text-zinc-600 outline-none transition-all";
    const textAreaClass = "w-full text-white bg-[#1c1c1e] border border-zinc-800 hover:bg-[#242426] focus:border-zinc-600 rounded-lg p-3 text-sm placeholder:text-zinc-600 outline-none transition-all";

    const selectBoxClass = "w-full";
    const triggerClasses = "w-full flex items-center justify-between bg-[#1c1c1e] border border-zinc-800 hover:bg-[#242426] h-12 rounded-lg px-3 text-white transition-all text-sm outline-none data-[focused=true]:border-zinc-600 data-[invalid=true]:border-danger";
    const popoverClasses = "bg-[#1c1c1e] border border-zinc-800 text-white rounded-lg shadow-xl p-1";
    const listItemClasses = "flex items-center justify-between p-2 rounded-md hover:bg-zinc-800 cursor-pointer text-sm text-zinc-200 outline-none data-[focused=true]:bg-zinc-800";

    return (
     <div className="min-h-screen bg-[#0d0d0e] px-4 py-8 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-4xl">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">
          Add Opportunity
        </h1>

        <p className="mt-2 text-zinc-400">
          Create and publish a new opportunity for candidates.
        </p>
      </div>

      {/* Card */}
      <div className="rounded-2xl border border-zinc-800 bg-[#121214] p-6 sm:p-8">

        <Form
          onSubmit={handleSubmit}
          validationErrors={errors}
          validationBehavior="aria"
          className="space-y-8"
        >

          <Fieldset className="space-y-6">

            <legend className="mb-4 border-b border-zinc-800 pb-3 text-lg font-semibold text-white">
              Opportunity Information
            </legend>

            {/* Row 1 */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

              <TextField
                name="roleTitle"
                isInvalid={!!errors.roleTitle}
              >
                <Label>Role Title</Label>

                <Input
                  placeholder="Frontend Developer Intern"
                  className={textInputClass}
                />

                {errors.roleTitle && (
                  <FieldError>{errors.roleTitle}</FieldError>
                )}
              </TextField>

              <TextField
                name="deadline"
                isInvalid={!!errors.deadline}
              >
                <Label>Deadline</Label>

                <Input
                  type="date"
                  className={textInputClass}
                />

                {errors.deadline && (
                  <FieldError>{errors.deadline}</FieldError>
                )}
              </TextField>

            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

              <TextField
                name="workType"
                isInvalid={!!errors.workType}
              >
                <Label>Work Type</Label>

                <Input
                  placeholder="Remote / Hybrid / On-site"
                  className={textInputClass}
                />

                {errors.workType && (
                  <FieldError>{errors.workType}</FieldError>
                )}
              </TextField>

              <TextField
                name="commitmentLevel"
                isInvalid={!!errors.commitmentLevel}
              >
                <Label>Commitment Level</Label>

                <Input
                  placeholder="Full-time / Part-time"
                  className={textInputClass}
                />

                {errors.commitmentLevel && (
                  <FieldError>
                    {errors.commitmentLevel}
                  </FieldError>
                )}
              </TextField>

            </div>

            {/* Skills */}
            <TextField
              name="requiredSkills"
              isInvalid={!!errors.requiredSkills}
            >
              <Label>Required Skills</Label>

              <TextArea
                rows={4}
                placeholder="React, Next.js, Node.js, MongoDB"
                className={textAreaClass}
              />

              {errors.requiredSkills && (
                <FieldError>
                  {errors.requiredSkills}
                </FieldError>
              )}
            </TextField>

            {/* Description */}
            <TextField name="description">
              <Label>Opportunity Description</Label>

              <TextArea
                rows={5}
                placeholder="Describe this opportunity..."
                className={textAreaClass}
              />
            </TextField>

          </Fieldset>

          {/* Footer Buttons */}
          <div className="flex flex-col-reverse gap-3 border-t border-zinc-800 pt-6 sm:flex-row sm:justify-end">

            <Button
              type="button"
              variant="bordered"
              className="border-zinc-700"
            >
              Cancel
            </Button>

            <Button
              type="submit"
              className="bg-white font-semibold text-black"
            >
              Add Opportunity
            </Button>

          </div>

        </Form>

      </div>
    </div>
  </div>
    );
}