"use client";
import { Button } from '@/components/ui/button';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Copy } from 'lucide-react';
import React, { useRef } from 'react'; // Import useRef

function OutputSection() {
    const editorRef = useRef(); // Define the ref without type any

    const handleCopy = () => {
        const content = editorRef.current.getInstance().getHTML(); // Get HTML content
        navigator.clipboard.writeText(content) // Copy to clipboard
            .then(() => alert('Content copied to clipboard!')) // Feedback to the user
            .catch(err => console.error('Failed to copy: ', err));
    };

    
    return (
        <div className='bg-white shadow-lg border rounded-lg'>
            <div className='flex justify-between items-center p-5'>
                <h2>Your Result</h2>
                <Button onClick={handleCopy}> <Copy /> Copy</Button>
            </div>
            <Editor
                ref={editorRef}
                initialValue="your result will appear here"
                initialEditType="wysiwyg"
                height="600px"
                useCommandShortcut={true}
                onChange={() => console.log(editorRef.current.getInstance().getMarkdown())} // Get Markdown content
            />
        </div>
    );
}

export default OutputSection;
