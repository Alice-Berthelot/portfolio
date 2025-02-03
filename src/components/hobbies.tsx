import { useTranslations } from "next-intl";
import Subtitle from "./subtitle";
import { IoEarthSharp } from "react-icons/io5";
import { BsCupHotFill } from "react-icons/bs";
import { FaSwimmer } from "react-icons/fa";

export default function Hobbies() {
  const t = useTranslations("HomePage");
  return (
    <section className="bg-dark-charcoal w-[45%] -mt-[16rem] flex flex-col gap-6 rounded-xl text-base px-16 py-8 rounded-md border border-solid border-ghost-white/30">
      <Subtitle title={t("profile.hobbies.title")} />
      <section className="text-center flex flex-col gap-12 justify-center items-center">
        <div>
        
            <h4 className="font-bold text-lg">
              {t("profile.hobbies.travels-title")}
            </h4>
            <IoEarthSharp className="size-8 m-auto my-2" />
          
          <p>{t("profile.hobbies.travels-content.skills")}</p>
          <p className="italic text-sm mt-2">{t("profile.hobbies.travels-content.solo")}</p>
        </div>

        <div className="flex gap-4 items-center">
          <div className="w-1/2">
              <h4 className="font-bold text-lg">
                {t("profile.hobbies.foodandtea-title")}
              </h4>
              <BsCupHotFill className="size-6 mx-auto my-2" />
            <p>{t("profile.hobbies.foodandtea-content")}</p>
          </div>

          <div className="w-1/2">
              <h4 className="font-bold text-lg">
                {t("profile.hobbies.sports-title")}
              </h4>
              <FaSwimmer className="size-8 m-auto my-1" />
            <p>{t("profile.hobbies.sports-content")}</p>
          </div>
        </div>
      </section>
    </section>
  );
}
