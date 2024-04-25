"use client";
import { useState } from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Component() {
  const [selectedInterests, setSelectedInterests] = useState({});
  const [selectedSkills, setSelectedSkills] = useState({});
  const [additionalInterest, setAdditionalInterest] = useState('');
  const [additionalSkill, setAdditionalSkill] = useState('');

  const handleInterestChange = (event) => {
    const { value, checked } = event.target;
    setSelectedInterests((prevSelectedInterests) => ({
      ...prevSelectedInterests,
      [value]: checked,
    }));
  };

  const handleSkillChange = (event) => {
    const { value, checked } = event.target;
    setSelectedSkills((prevSelectedSkills) => ({
      ...prevSelectedSkills,
      [value]: checked,
    }));
  };

  const handleAdditionalInterestChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAdditionalInterest(event.target.value);
  };

  const handleAdditionalSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAdditionalSkill(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const selectedInterestsArray = Object.entries(selectedInterests)
      .filter(([_, checked]) => checked)
      .map(([interest]) => interest);

    const selectedSkillsArray = Object.entries(selectedSkills)
      .filter(([_, checked]) => checked)
      .map(([skill]) => skill);

    console.log('Selected Interests:', selectedInterestsArray);
    console.log('Selected Skills:', selectedSkillsArray);
    console.log('Additional Interest:', additionalInterest);
    console.log('Additional Skill:', additionalSkill);
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
        <form className="space-y-6" onSubmit={handleFormSubmit}>
          <div>
            <h2 className="mb-2 text-lg font-semibold">Interests</h2>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="interest-technology" value="technology" onChange={handleInterestChange} />
                <Label htmlFor="interest-technology">Technology</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="interest-art" value="art" onChange={handleInterestChange} />
                <Label htmlFor="interest-art">Art</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="interest-science" value="science" onChange={handleInterestChange} />
                <Label htmlFor="interest-science">Science</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="interest-writing" value="writing" onChange={handleInterestChange} />
                <Label htmlFor="interest-writing">Writing</Label>
              </div>
              <Input placeholder="Enter additional interest" value={additionalInterest} onChange={handleAdditionalInterestChange} />
            </div>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-semibold">Skills</h2>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="skill-programming" value="programming" onChange={handleSkillChange} />
                <Label htmlFor="skill-programming">Programming</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="skill-design" value="design" onChange={handleSkillChange} />
                <Label htmlFor="skill-design">Design</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="skill-analysis" value="analysis" onChange={handleSkillChange} />
                <Label htmlFor="skill-analysis">Data Analysis</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="skill-communication" value="communication" onChange={handleSkillChange} />
                <Label htmlFor="skill-communication">Communication</Label>
              </div>
              <Input placeholder="Enter additional skill" value={additionalSkill} onChange={handleAdditionalSkillChange} />
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