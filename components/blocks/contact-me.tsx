"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { BlurEffect1, BlurEffect2 } from "@/components/blurEffect";
import { useRef, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  emailAddress: z.string().email({
    message: "Invalid email address",
  }),
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  message: z.string().min(2, {
    message: "Message must be at least 2 characters.",
  }),
});

const ContactMe = () => {
  const [loading, setLoading] = useState(false);
  const ref = useRef<HTMLFormElement | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      emailAddress: "",
      title: "",
      message: "",
    },
  });

  // The expected type comes from property 'ref' which is declared here on type 'DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>'
  //<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      await axios.post("/api/resend", values);
      if (ref.current) {
        await emailjs.sendForm(
          "service_dp3xxyw",
          "template_ckxf41j",
          ref.current,
          process.env.EMAILJS_PUBLIC_KEY
        );
      }
      toast.success("Message sent successfully");
    } catch (error) {
      console.log(error);
      toast.error("An error occured while sending your message");
    } finally {
      setLoading(false);
    }
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  };
  return (
    <section
      id="contact-me"
      className=" snap-start snap-normal md:w-2/3 mx-auto flex flex-col px-4 relative">
      <BlurEffect1 />
      <h1 className="text-center text-xl md:text-4xl">
        Feel free to hit me up
      </h1>

      <Form {...form}>
        <form
          ref={ref}
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe..." {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="emailAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe..." {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe..." {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Type your Message here" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={loading} type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </Form>
      <BlurEffect2 />
    </section>
  );
};

export default ContactMe;
