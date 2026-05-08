'use client'

import { useState, useRef, useCallback } from 'react'
import PaywallModal from './PaywallModal'

interface ToolUploaderProps {
  toolId: string
  title: string
  description: string
  accept: string
  multiple?: boolean
  actionLabel?: string
  outputLabel?: string
}

type State = 'idle' | 'uploading' | 'processing' | 'done' | 'error'

export default function ToolUploader({
  toolId,
  title,
  description,
  accept,
  multiple = false,
  actionLabel = 'Convert',
  outputLabel = 'Download File',
}: ToolUploaderProps) {
  const [state, setState] = useState<State>('idle')
  const [files, setFiles] = useState<File[]>([])
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)
  const [downloadName, setDownloadName] = useState<string>('result')
  const [error, setError] = useState<string | null>(null)
  const [showPaywall, setShowPaywall] = useState(false)
  const [dragOver, setDragOver] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFiles = useCallback((fileList: FileList | null) => {
    if (!fileList) return
    setFiles(Array.from(fileList))
    setState('idle')
    setDownloadUrl(null)
    setError(null)
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setDragOver(false)
      handleFiles(e.dataTransfer.files)
    },
    [handleFiles]
  )

  const handleSubmit = async () => {
    if (files.length === 0) return
    setState('uploading')
    setError(null)

    const formData = new FormData()
    files.forEach((f) => formData.append('files', f))

    try {
      const res = await fetch(`/api/process/${toolId}`, {
        method: 'POST',
        body: formData,
      })

      if (res.status === 402) {
        setState('idle')
        setShowPaywall(true)
        return
      }

      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: 'Processing failed' }))
        throw new Error(err.error || 'Processing failed')
      }

      setState('processing')
      const blob = await res.blob()
      const contentDisposition = res.headers.get('content-disposition')
      const match = contentDisposition?.match(/filename="([^"]+)"/)
      const name = match?.[1] ?? 'result'

      const url = URL.createObjectURL(blob)
      setDownloadUrl(url)
      setDownloadName(name)
      setState('done')
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
      setState('error')
    }
  }

  const reset = () => {
    setFiles([])
    setDownloadUrl(null)
    setError(null)
    setState('idle')
    if (inputRef.current) inputRef.current.value = ''
  }

  const isLoading = state === 'uploading' || state === 'processing'

  return (
    <>
      {showPaywall && <PaywallModal onClose={() => setShowPaywall(false)} />}

      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h1>
          <p className="text-gray-500 mt-2">{description}</p>
        </div>

        {state !== 'done' ? (
          <div
            className={`upload-zone ${dragOver ? 'drag-over' : ''}`}
            onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            onClick={() => inputRef.current?.click()}
          >
            <input
              ref={inputRef}
              type="file"
              accept={accept}
              multiple={multiple}
              className="hidden"
              onChange={(e) => handleFiles(e.target.files)}
            />
            {files.length > 0 ? (
              <div>
                <div className="text-2xl mb-2">📎</div>
                <p className="font-semibold text-gray-800">
                  {files.length === 1 ? files[0].name : `${files.length} files selected`}
                </p>
                <p className="text-sm text-gray-400 mt-1">Click to change files</p>
              </div>
            ) : (
              <div>
                <div className="text-4xl mb-3">☁️</div>
                <p className="font-semibold text-gray-700">Drop files here or click to upload</p>
                <p className="text-sm text-gray-400 mt-1">Max 50MB per file</p>
              </div>
            )}
          </div>
        ) : null}

        {state === 'error' && (
          <div className="mt-4 bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
            {error}
          </div>
        )}

        {state === 'done' && downloadUrl ? (
          <div className="text-center py-10">
            <div className="text-5xl mb-4">✅</div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Ready to download!</h2>
            <a
              href={downloadUrl}
              download={downloadName}
              className="btn-primary inline-block mb-4"
            >
              {outputLabel}
            </a>
            <br />
            <button onClick={reset} className="text-sm text-gray-500 hover:text-gray-700 mt-2">
              Convert another file
            </button>
          </div>
        ) : (
          <div className="mt-6 text-center">
            <button
              onClick={handleSubmit}
              disabled={files.length === 0 || isLoading}
              className="btn-primary w-full max-w-xs"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  {state === 'uploading' ? 'Uploading...' : 'Processing...'}
                </span>
              ) : actionLabel}
            </button>
            <p className="text-xs text-gray-400 mt-3">1 free conversion per day · Files deleted after 24h</p>
          </div>
        )}
      </div>
    </>
  )
}
