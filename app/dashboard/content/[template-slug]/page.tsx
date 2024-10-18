'use client'; // Ensure this is a client component
import React, { useState } from 'react';
import FormSection from '../_components/FormSection';
import OutputSection from '../_components/OutputSection';
import Templates from '@/app/(data)/Templates'; // Ensure this is imported correctly
import { TEMPLATE } from '../../_components/TemplateListSection';
import { ArrowLeft } from 'lucide-react';
import { chatSession } from '@/utils/AiModal';

import Link from 'next/link'; // Import Link from Next.js
import { Button } from '@/components/ui/button';

interface PROPS {
  params: {
    'template-slug': string;
  };
}

function CreateNewContent({ params }: PROPS) {
  console.log(params['template-slug']);

  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug === params['template-slug']
  );
  const [loading, setLoading] = useState(false);

  // Mark the function as async
  const GenerateAIContent = async (formData: any) => {
    try {
      setLoading(true);
      const SelectedPrompt = selectedTemplate?.aiPrompt;
      const FinalAIPrompt = JSON.stringify(formData) + ', ' + SelectedPrompt;

      // Use await correctly in the async function
      const result = await chatSession.sendMessage(FinalAIPrompt);
      console.log(await result.response.text());
    } catch (error) {
      console.error('Error generating content:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!selectedTemplate) {
    return <div>Template not found</div>;
  }

  return (
    <div className='p-5'>
      <Link href="/dashboard">
        <Button>
          <ArrowLeft /> Back
        </Button>
      </Link>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
        {/* FormSection */}
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => GenerateAIContent(v)} // Correct function call
        />

        {/* OutputSection */}
        <div className='col-span-2'>
          <OutputSection />
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent;
