import { useTranslations } from "next-intl";
import Subtitle from "./subtitle";
import { IoEarthSharp } from "react-icons/io5";
import { BsCupHotFill } from "react-icons/bs";
import { FaSwimmer } from "react-icons/fa";

export default function Hobbies() {
  const t = useTranslations("HomePage");
  return (
    <section className="bg-dark-charcoal w-3/4 mx-auto mt-6 flex flex-col gap-6 rounded-xl text-base px-10 py-8 rounded-md border border-solid border-ghost-white/30">
      <Subtitle title={t("profile.hobbies.title")} />
      <section className="text-center flex flex-col gap-4 justify-center items-center">
        <div>
          <div className="flex justify-center items-center gap-2">
            <h4 className="font-bold text-lg">
              {t("profile.hobbies.travels-title")}
            </h4>
            <IoEarthSharp className="size-8" />
          </div>
          <p>{t("profile.hobbies.travels-content.skills")}</p>
          <p>{t("profile.hobbies.travels-content.solo")}</p>
        </div>

        <div className="flex">
          <div className="w-1/2">
            <div className="flex justify-center items-end gap-2">
              <h4 className="font-bold text-lg">
                {t("profile.hobbies.foodandtea-title")}
              </h4>
              <BsCupHotFill className="size-6" />
            </div>
            <p>{t("profile.hobbies.foodandtea-content")}</p>
          </div>

          <div className="w-1/2">
            <div className="flex justify-center items-center gap-2">
              <h4 className="font-bold text-lg">
                {t("profile.hobbies.sports-title")}
              </h4>
              <FaSwimmer className="size-8" />
            </div>
            <p>{t("profile.hobbies.sports-content")}</p>
          </div>
        </div>
      </section>
    </section>
  );
}
