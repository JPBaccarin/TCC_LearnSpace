import * as React from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "usehooks-ts";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Trash } from "lucide-react";

interface ModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  question: any; // Replace 'any' with the type of your question
  handleDelete: () => void; // Function to handle delete
}

export function DeleteModal({ open, setOpen, question, handleDelete }: ModalProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const handleConfirmDelete = () => {
    handleDelete();
    setOpen(false);
  };

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="bg-red-500 hover:bg-red-600">
            <Trash />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>Confirm Delete</DialogHeader>
          <DialogDescription>
            Are you sure you want to delete this item?
          </DialogDescription>
          <Button onClick={handleConfirmDelete}>Confirm Delete</Button>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className="bg-red-500 hover:bg-red-600">
          <Trash />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Confirm Delete</DrawerTitle>
          <DrawerDescription>
            Are you sure you want to delete this item?
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="pt-2">
          <Button onClick={handleConfirmDelete}>Confirm Delete</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}