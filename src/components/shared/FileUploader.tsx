"use client";

import { Dispatch, SetStateAction, useCallback } from "react";
import { useDropzone } from "@uploadthing/react/hooks";
import { generateClientDropzoneAccept } from "uploadthing/client";

import { convertFileToUrl } from "@/lib/utilis";
import Image from "next/image";

type FileUploaderProps = {
  imageUrl: any;
  onChange: any;

  changeFiles: Dispatch<SetStateAction<[]>>;
};

export function FileUploader({
  imageUrl,
  onChange,
  changeFiles,
}: FileUploaderProps) {
  const onDrop = useCallback(
    (acceptedFiles: any) => {
      changeFiles(acceptedFiles);

      onChange(convertFileToUrl(acceptedFiles[0]));
    },
    [changeFiles, onChange]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*" ? generateClientDropzoneAccept(["image/*"]) : undefined,
  });

  return (
    <div
      {...getRootProps()}
      className="flex-center bg-dark-3 flex h-72 cursor-pointer flex-col overflow-hidden rounded-xl bg-grey-50"
    >
      <input {...getInputProps()} className="cursor-pointer" />

      {imageUrl ? (
        <div className="flex h-full w-full flex-1 justify-center items-center">
          <Image
            src={imageUrl}
            alt="image"
            width={250}
            height={250}
            className="w-full object-cover object-center "
          />
        </div>
      ) : (
        <div className="font-light font-body text-gray-50 flex flex-col items-center justify-center bg-violet-500/10 p-4 ">
          <Image
            src="/assets/icons/upload.svg"
            width={77}
            height={77}
            alt="file upload"
          />
          <h3 className="mb-2 mt-2">Drag photo here</h3>
          <p className="p-medium-12 mb-4">SVG, PNG, JPG</p>
          <button type="button" className="rounded-full bg-violet-700 p-2">
            Select from computer
          </button>
        </div>
      )}
    </div>
  );
}
