"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import { useFieldArray, useFormContext } from "react-hook-form";
import { ICollectionInformationSchema } from "@/lib/schemas/create_launchpad.schema";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useStore } from "@/store/store";
import UploadBanner from "./upload-banner";
import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect } from "react";
import { Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
export default function CollectionInformationForm() {
  const { control, trigger, getValues } =
    useFormContext<ICollectionInformationSchema>();

  const { createPage, setCreatePage, collectionBanner } = useStore();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "royalties",
  });

  const { publicKey } = useWallet();

  const onProceed = async () => {
    const valid = await trigger();

    if (!collectionBanner) {
      console.log(collectionBanner);

      toast("Collection banner is required");

      return;
    }
    if (valid) {
      setCreatePage(createPage + 1);
    }
  };

  useEffect(() => {
    if (publicKey && fields.length == 0) {
      remove();
      append({ shares: "100", wallet: publicKey.toString() });
    }
  }, [publicKey, fields, append, remove]);

  return (
    <div className="w-full p-4 flex flex-col gap-8 bg-white-4 shadow-lg rounded-lg border border-white-4">
      <p className="text-white-100 ty-h6 font-extrabold">
        Candy Store Information
      </p>

      <div className="w-full flex gap-4 justify-center">
        <div className="basis-[50%] flex flex-col gap-4">
          <div className="w-full flex justify-between gap-2">
            <FormField
              control={control}
              name="collectionName"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-1 basis-[50%]">
                  <FormLabel>Collection name</FormLabel>
                  <FormControl>
                    <Input placeholder="insert collection name" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="collectionSymbol"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-1 basis-[50%]">
                  <FormLabel>Symbol</FormLabel>
                  <FormControl>
                    <Input placeholder="insert collection symbol" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={control}
            name="collectionDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="basis-[50%] flex flex-col gap-1">
          <p className="ty-title">Collection Banner</p>

          <UploadBanner />
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 justify-center">
        <p className="ty-title pb-[10px]">Secondary royalties</p>

        {fields.map((e, index) => {
          return (
            <div key={e.id} className="w-full flex items-end gap-4">
              <FormField
                control={control}
                name={`royalties.${index}.shares`}
                render={({ field }) => (
                  <FormItem className="w-full max-w-[90px] flex flex-col gap-1">
                    <FormLabel>Shares</FormLabel>
                    <FormControl>
                      <Input placeholder="%" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name={`royalties.${index}.wallet`}
                render={({ field }) => (
                  <FormItem className="w-full flex flex-col gap-1">
                    <FormLabel>Wallet Address</FormLabel>
                    <FormControl>
                      <Input placeholder="wallet address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex flex-col gap-1">
                <div className=""></div>

                <Button
                  onClick={() => {
                    remove(index);
                  }}
                  size={"icon"}
                  className={cn("")}
                >
                  <Trash2 />
                </Button>
              </div>
            </div>
          );
        })}

        <Button
          onClick={() => {
            append({ shares: "0", wallet: "" });
          }}
          className="border-2 border-dashed border-white-4 shadow-lg rounded-lg bg-black"
        >
          <div className="flex items-center">
            <Image src="/images/add.png" alt="upload" width={16} height={16} />
            <span className="ty-subtext pl-2">Add split</span>
          </div>
        </Button>
      </div>
      <div className="w-full flex flex-col gap-4 justify-center">
        <p className="ty-title">Website and Social Media</p>

        <div className="flex w-full flex-wrap gap-4">
          <FormField
            control={control}
            name="website"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1 basis-[48%]">
                <FormLabel>Website</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Website Link" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="x"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1 basis-[48%]">
                <FormLabel>X (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Enter X" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="discord"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1 basis-[48%]">
                <FormLabel>Discord (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Enter discord link" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="ig"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1 basis-[48%]">
                <FormLabel>Instagram (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Instagram link" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="yt"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1 basis-[48%]">
                <FormLabel>Youtube (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Yt link" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="tg"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1 basis-[48%]">
                <FormLabel>TG (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Enter tg link" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <div className="w-full flex items-center justify-end">
        <Button
          onClick={onProceed}
          className="text-xl bg-pink-32 hover:bg-red-500 text-white dm-sans font-bold h-[30px] w-[95] rounded-[4px]"
        >
          <span className="text-sm">Next</span>
        </Button>
      </div>
    </div>
  );
}
