"use client";

import React, { useEffect } from "react";
import { signIn } from "next-auth/react";

import { useSession } from "next-auth/react";

const Signin = () => {
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user) {
      window.location.reload();
    }
  }, [session]);

  return (
    <section>
      <form>
        <h1>Welcome Back</h1>
      </form>
    </section>
  );
};

export default Signin;
