import React from "react";
import { getServerSession } from "next-auth/next";
import { AuthOptions } from "../../../node_modules/next-auth/index";
import { Session } from "next-auth";
import { redirect } from "next/navigation";
import Signin from "@/components/auth/Signin";

const Login = async () => {
  const session: Session | null = await getServerSession();

  if (session) {
    redirect("/add-to-cart");
  } else {
    <Signin />;
  }
};

export default Login;
