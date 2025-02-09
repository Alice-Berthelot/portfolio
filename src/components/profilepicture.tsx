"use client";
import Image from "next/image";
import profilePic from "../../public/pictures/profile-pic.png";
import { motion } from "framer-motion";

export default function ProfilePicture() {
  return (
    <motion.picture
      className="lg:pl-16 order-last md:order-first w-40 md:w-64 lg:w-auto"
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 15 }}
    >
      {/* prévoir un alt fr/eng */}
      <Image src={profilePic} alt="profile picture" width="600" />
    </motion.picture>
  );
}
