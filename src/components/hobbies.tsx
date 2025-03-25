import { useTranslations } from "next-intl";
import Subtitle from "./subtitle";
import { IoEarthSharp } from "react-icons/io5";
import { BsCupHotFill } from "react-icons/bs";
import { FaSwimmer } from "react-icons/fa";
import { ScrollDownAnimation } from "./scrolldownanimation";

export default function Hobbies() {
  const t = useTranslations("HomePage");
  return (
    <div className="w-[90%] md-[75%] lg:w-[45%]">
      <ScrollDownAnimation>
        <section className="bg-dark-charcoal lg:-mt-[16rem] flex flex-col gap-6 rounded-xl text-base px-16 py-8 rounded-md border border-solid border-ghost-white/30">
          <Subtitle title={t("profile.hobbies.title")} />
          <section className="mb-2 flex flex-col gap-12 justify-center items-center">
            <ScrollDownAnimation>
              <div>
              <IoEarthSharp className="size-7 ml-2 text-joyful" />
                <h4 className="font-bold text-lg my-2 ">
                  {t("profile.hobbies.travels-title")}
                </h4>
               

                <p className="text-ghost-white/75">{t("profile.hobbies.travels-content.skills")}</p>
                <p className="italic text-sm mt-2 text-ghost-white/75">
                  {t("profile.hobbies.travels-content.solo")}
                </p>
              </div>
            </ScrollDownAnimation>

            <div className="flex gap-6">
              <div className="w-1/2">
                <ScrollDownAnimation>
                  <BsCupHotFill className="size-6 ml-2 text-joyful" />
                  <h4 className="font-bold text-lg my-2">
                    {t("profile.hobbies.foodandtea-title")}
                  </h4>
                  <p className="text-ghost-white/75">{t("profile.hobbies.foodandtea-content")}</p>
                </ScrollDownAnimation>
              </div>

              <div className="w-1/2">
                <ScrollDownAnimation>
                  <FaSwimmer className="size-8 ml-2 text-joyful" />
                  <h4 className="font-bold text-lg mb-2">
                    {t("profile.hobbies.sports-title")}
                  </h4>
                  <p className="text-ghost-white/75">{t("profile.hobbies.sports-content")}</p>
                </ScrollDownAnimation>
              </div>
            </div>
          </section>
        </section>
      </ScrollDownAnimation>
    </div>
  );
}
