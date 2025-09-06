import React, { useState, useEffect } from "react";
import { Runbook } from "@/entities/Runbook";
import { Skeleton } from "@/components/ui/skeleton";
import ReactMarkdown from 'react-markdown';

export default function Runbooks() {
    const [runbooks, setRunbooks] = useState([]);
    const [selectedRunbook, setSelectedRunbook] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchRunbooks = async () => {
            setIsLoading(true);
            const runbookData = await Runbook.list("title");
            setRunbooks(runbookData);
            if (runbookData.length > 0) {
                setSelectedRunbook(runbookData[0]);
            }
            setIsLoading(false);
        };
        fetchRunbooks();
    }, []);

    return (
        <div className="flex gap-8 h-full">
            {/* Runbook List */}
            <div className="w-1/3 bg-white border-4 border-black rounded-lg p-4 flex flex-col gap-2">
                <h3 className="text-xl font-bold border-b-4 border-black pb-2 mb-2">Available Runbooks</h3>
                {isLoading ? (
                    Array.from({length: 6}).map((_, i) => <Skeleton key={i} className="h-12 w-full bg-gray-300"/>)
                ) : (
                    runbooks.map(rb => (
                        <button
                            key={rb.id}
                            onClick={() => setSelectedRunbook(rb)}
                            className={`w-full text-left p-3 font-bold border-4 border-black rounded-md transition-all duration-150
                                ${selectedRunbook?.id === rb.id
                                    ? 'bg-yellow-400 shadow-[4px_4px_0px_#000000]'
                                    : 'bg-white hover:bg-yellow-200'
                                }
                            `}
                        >
                            {rb.title}
                        </button>
                    ))
                )}
            </div>

            {/* Runbook Content */}
            <div className="w-2/3 bg-white border-4 border-black rounded-lg p-6 overflow-auto">
                 {isLoading && !selectedRunbook ? (
                    <div className="space-y-4">
                        <Skeleton className="h-8 w-3/4 bg-gray-300"/>
                        <Skeleton className="h-4 w-full bg-gray-300"/>
                        <Skeleton className="h-4 w-full bg-gray-300"/>
                        <Skeleton className="h-4 w-2/3 bg-gray-300"/>
                    </div>
                ) : selectedRunbook ? (
                    <article className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-pink-600 prose-a:font-bold prose-code:bg-yellow-200 prose-code:p-1 prose-code:rounded prose-code:font-bold">
                        <h1>{selectedRunbook.title}</h1>
                        <ReactMarkdown>{selectedRunbook.content}</ReactMarkdown>
                    </article>
                ) : (
                     <div className="text-center flex flex-col items-center justify-center h-full">
                        <p className="text-2xl font-bold">No Runbook Selected</p>
                        <p className="text-gray-600">Choose a runbook from the list to view its contents.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
