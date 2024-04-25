"use client";
import { useForm } from 'react-hook-form';
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface FormData {
  'interest-technology': boolean;
  'interest-art': boolean;
  'interest-science': boolean;
  'interest-writing': boolean;
  additionalInterest: string;
  'skill-programming': boolean;
  'skill-design': boolean;
  'skill-analysis': boolean;
  'skill-communication': boolean;
  additionalSkill: string;
}

export default function Component() {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const {
      'interest-technology': technologyInterest,
      'interest-art': artInterest,
      'interest-science': scienceInterest,
      'interest-writing': writingInterest,
      additionalInterest,
      'skill-programming': programmingSkill,
      'skill-design': designSkill,
      'skill-analysis': analysisSkill,
      'skill-communication': communicationSkill,
      additionalSkill,
    } = data;
  
    const interests = [
      technologyInterest && 'technology',
      artInterest && 'art',
      scienceInterest && 'science',
      writingInterest && 'writing',
      additionalInterest,
    ].filter(Boolean);
  
    const skills = [
      programmingSkill && 'programming',
      designSkill && 'design',
      analysisSkill && 'analysis',
      communicationSkill && 'communication',
      additionalSkill,
    ].filter(Boolean);
  
    console.log('Interests:', interests);
    console.log('Skills:', skills);
  
    try {
      const response = await fetch('/api/ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ interests, skills }),
      });
  
      if (response.ok) {
        // Handle successful response
        console.log('Form data successfully sent to API');
      } else {
        // Handle error response
        console.error('Failed to send form data to API');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('An error occurred:', error);
    }
  };

  return (
    <main key="1" className="flex min-h-screen w-full items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950">
      <div className="mx-auto w-full max-w-md space-y-6 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Find Your Dream Career</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Select your interests and skills to get personalized career suggestions.
          </p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h2 className="mb-2 text-lg font-semibold">Interests</h2>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="interest-technology" {...register('interest-technology')} />
                <Label htmlFor="interest-technology">Technology</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="interest-art" {...register('interest-art')} />
                <Label htmlFor="interest-art">Art</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="interest-science" {...register('interest-science')} />
                <Label htmlFor="interest-science">Science</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="interest-writing" {...register('interest-writing')} />
                <Label htmlFor="interest-writing">Writing</Label>
              </div>
              <Input placeholder="Enter additional interest" {...register('additionalInterest')} />
            </div>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-semibold">Skills</h2>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="skill-programming" {...register('skill-programming')} />
                <Label htmlFor="skill-programming">Programming</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="skill-design" {...register('skill-design')} />
                <Label htmlFor="skill-design">Design</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="skill-analysis" {...register('skill-analysis')} />
                <Label htmlFor="skill-analysis">Data Analysis</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="skill-communication" {...register('skill-communication')} />
                <Label htmlFor="skill-communication">Communication</Label>
              </div>
              <Input className="w-full" placeholder="Enter additional skill" {...register('additionalSkill')} />
            </div>
          </div>
          <Button className="w-full" type="submit">
            Get Career Suggestions
          </Button>
        </form>
      </div>
    </main>
  );
}