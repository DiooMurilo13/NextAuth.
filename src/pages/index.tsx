import Head from "next/head";
import Image from "next/image";
import { SignGoogle } from "../components/GoogleButton";
import styles from "../styles/Home.module.css";

import { useSession, signIn, signOut } from "next-auth/react";
import { TableComponent } from "../components/TableComponent";
import { Tela } from "../components/login";

export default function Component() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <TableComponent session={session} />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  } else
    return (
      <>
        <Tela />
      </>
    );
}
