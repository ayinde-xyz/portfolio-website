"use client";
import { Sidebar, useSidebar } from "@/components/ui/sidebar";
import { motion, AnimatePresence } from "framer-motion";
import { maskAnimation, menuAnimation } from "./animations/navbar.animaton";
import MainNav from "./main-nav";
import { Button } from "./ui/button";
import { X } from "lucide-react";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { openMobile, setOpenMobile } = useSidebar();
  return (
    <Sidebar {...props} variant="floating">
      <AnimatePresence>
        {openMobile && (
          <>
            <motion.div
              className="fixed left-0 top-0 z-20 h-full w-full bg-zinc-900"
              variants={maskAnimation}
              initial="from"
              animate="to"
              exit="from"
            />
            <motion.div
              variants={menuAnimation}
              initial={"from"}
              animate={"to"}
              exit={"from"}
              className="fixed top-0 left-0 z-10 h-full bg-white dark:text-black w-full flex flex-col items-center justify-center gap-5">
              <Button
                variant={"destructive"}
                size={"icon"}
                onClick={() => setOpenMobile(false)}
                className="top-5 right-10 absolute cursor-pointer">
                <X className="w-6 h-6" />
              </Button>

              <MainNav className="flex flex-col items-center justify-center space-y-10 text-2xl" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Sidebar>
  );
}
