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
        <div className="space-y-4 lg:space-y-6">
            {/* Runbook List */}
            <div className="bg-white border-4 border-black rounded-lg p-3 lg:p-4">
                <h3 className="text-lg lg:text-xl font-bold border-b-4 border-black pb-2 mb-4">Available Runbooks</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-4">
                    {isLoading ? (
                        Array.from({length: 6}).map((_, i) => <Skeleton key={i} className="h-12 w-full bg-gray-300"/>)
                    ) : (
                        runbooks.map(rb => (
                            <button
                                key={rb.id}
                                onClick={() => setSelectedRunbook(rb)}
                                className={`w-full text-left p-3 font-bold border-4 border-black rounded-md transition-all duration-150 text-sm lg:text-base
                                    ${selectedRunbook?.id === rb.id
                                        ? 'bg-yellow-400 shadow-[4px_4px_0px_#000000]'
                                        : 'bg-white hover:bg-yellow-200'
                                    }
                                `}
                            >
                                <span className="truncate block">{rb.title}</span>
                            </button>
                        ))
                    )}
                </div>
            </div>

            {/* Runbook Content */}
            {selectedRunbook && (
                <div className="bg-white border-4 border-black rounded-lg p-4 lg:p-6">
                    <article className="prose prose-sm lg:prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-pink-600 prose-a:font-bold prose-code:bg-yellow-200 prose-code:p-1 prose-code:rounded prose-code:font-bold">
                        <h1 className="text-xl lg:text-3xl">{selectedRunbook.title}</h1>
                        <ReactMarkdown>{selectedRunbook.content}</ReactMarkdown>
                    </article>
                </div>
            )}
        </div>
    );
}
