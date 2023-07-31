import Image from "next/image";
import Logo from "@/public/logo.jpeg";
import Ribbon from "@/public/ribbon.svg";
import Ribbon2 from "@/public/ribbon2.svg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-primary">
      <div className="mx-auto max-w-[1300px] pt-10 px-4">
        <p className="bg-[#2C5364] px-5 py-3 rounded-[11px] text-white text-[14px] font-light">
          For enquiries and clarifications, contact us on{" "}
          <strong>+23497342972</strong>
        </p>
      </div>
      <section className="mx-auto items-center w-full  md:max-w-[1300px] py-10 md:py-16 px-4">
        <div className="font-secondary flex ">
          <div>
            <h1 className="text-[25px] font-secondary md:text-[50px] leading-10 md:leading-[74px] text-[#F5F5F5]">
              {"MA'ADUL"} MALIK SCHOOL <br /> FOR {"QUR'AN"}
              <br /> MEMORIZATION AND <br />
              ISLAMIC STUDIES
            </h1>
            <div className="relative w-full mt-10">
              <div className="bg-white">
                <Link
                  // href="https://forms.gle/xaJsJBKddLtK4yWk6"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdXeoyoE3cEAHgv66qeL4191Mt_rGmRuEAsNROmLDvuWMC0UA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  // type="button"
                  className="absolute bottom-[5px] left-[-6px] h-[72px] w-[150px] md:w-[200px]  text-white flex justify-center items-center bg-[#914629] border border-solid border-[#000000] z-10 "
                >
                  REGISTER
                </Link>
              </div>
              <div className="h-[72px] w-[150px] md:w-[200px]  bg-[#914629] border border-solid border-[#000000]" />
            </div>
          </div>
          <div className="ml-20 p-5 glass-effect rounded-xl max-h-[500px] hidden md:block">
            <Image
              src={Logo}
              alt="logo"
              className=" border border-gray-100 shadow-sm w-[300px] h-full object-center"
            />
          </div>
        </div>
        <div className="flex gap-8 mb-5"></div>
      </section>
      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto ">
          <div
            id="about"
            className="px-8 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 pt-10"
          >
            <div className="text-left">
              <h1 className="text-[22px] leading-[74px] text-[#2C5364]">
                ABOUT US
              </h1>

              <p className="font-extralight text-[15px] leading-6 text-[#0D2D32]">
                We are dedicated to teaching quality {"Qur'an"} & Islamic
                knowledges enhanced by advanced methods. <br /> <br />
                Our Online madrasah is an online solution where your child can
                learn from the comfort of their own home, on their desktop,
                laptop or even smartphone.
              </p>
            </div>
            <div className="text-left">
              <h1 className="text-[22px] leading-[74px] text-[#2C5364]">
                OUR MISSION
              </h1>
              <p className="font-extralight text-[15px] leading-6 text-[#0D2D32]">
                Our Mission is to provide high quality {"QUR'AN"} & ISLAMIC
                education and childcare in a safe, respectful and inclusive
                environment that builds a foundation for life-long learning.
              </p>
            </div>
          </div>
          <div className="px-8 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
            <div className="text-left">
              <h1 className="text-[22px] leading-[74px] text-[#2C5364]">
                OUR VISION
              </h1>
              <p className="font-extralight text-[15px] leading-6 text-[#0D2D32]">
                Our vision is to develop well rounded, confident and responsible
                individuals who aspire to achieve their full potential. We will
                do this by providing a welcoming, happy, safe, and supportive
                learning environment in which everyone is equal and all
                achievements are celebrated.
              </p>
            </div>
            <div className="text-left">
              <h1 className="text-[26px] leading-[74px] text-[#2C5364]">
                WHY JOIN US
              </h1>
              <p className="font-extralight text-[15px] leading-6 text-[#0D2D32]">
                At our madrasah, we have many unique features that will allow
                your child(ren) to maximize their efforts and make full benefit
                from their time. Our unique features include; professional
                tutors for both physical and online classes, serine environment
                for the physical class and lots more.
              </p>
            </div>
          </div>
          <div
            id="programmes"
            className="relative p-10 text-white bg-[#203A43] mt-16"
          >
            <h1 className="text-xl leading-6 text-white mb-10">
              OUR PROGRAMMES
            </h1>

            <div className="relative z-30">
              <p className="font-normal text-[15px] leading-6 mb-5">
                1. Guaranteed Hifz ({"Qur'an"} memorization with proper
                monitoring).
              </p>
              <p className="font-normal text-[15px] leading-6 mb-5">
                2. Arabic Language for beginners, intermediates, and advanced
                students.
              </p>
              <p className="font-normal text-[15px] leading-6 mb-5">
                3. Memorization of Mutool (Concise Islamic Texts).
              </p>
              <p className="font-normal text-[15px] leading-6 mb-5">
                4. Memorization of {"QUR'AN"} with riwayaat (Different styles of
                recitation).
              </p>
              <p className="font-normal text-[15px] leading-6 mb-5">
                5. Tajweed course for beginners, intermediates, and advanced
                students.
              </p>
              <p className="font-normal text-[15px] leading-6 mb-5">
                6. How to recite the {"QUR'AN"} with the use of Tajweed.
              </p>
              <p className="font-normal text-[15px] leading-6 mb-5">
                7. English language, Mathematics and Programming (for boarding
                students only)
              </p>
            </div>
            <Image
              src={Ribbon2}
              alt="ribbon"
              className="absolute bottom-0 right-0 opacity-25"
            />
          </div>
          <div id="classes" className="text-left mt-16  px-5 ">
            <h1 className="text-[22px] leading-[54px] text-[#2C5364]">
              SCHEDULE
            </h1>
            <p className="font-extralight text-[15px] text-[#0D2D32]">
              We offer both online and physical classes
            </p>
            {/* <div className="gap-16 mt-10 w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-2"> */}
            <div className="gap-10 mt-10 w-full  grid grid-cols-1 md:grid-cols-3">
              <div className="relative">
                <div className="w-full h-[285px] bg-[#2C5364] border border-[#203A43]" />
                <div className="absolute w-full bottom-0 right-0  mr-[8px]">
                  <div className="relative  h-[285px] mb-[8px] bg-[#fff] border-[1px] border-[#203A43] p-6">
                    <h4 className="mb-3">
                      Online class: Scheduled based on number of days
                    </h4>
                    <p className="mb-3">• 5 days per week (Maximum)</p>
                    <p className="mb-3">• 4 days per week</p>
                    <p className="mb-3">• 3 days per week (Minimum)</p>
                    <Image
                      src={Ribbon}
                      alt="ribbon"
                      className="absolute bottom-0 right-0"
                    />
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-[285px] bg-[#2C5364] border border-[#203A43]" />
                <div className="absolute  w-full bottom-0 right-0  mr-[8px]">
                  <div className="relative h-[285px] mb-[8px] bg-[#fff] border-[1px] border-[#203A43] p-6">
                    <h4 className="mb-3">
                      Physical class: Takes place 5 times, a week
                    </h4>
                    <p className="mb-3">• Saturdays</p>
                    <p className="mb-3">• Sundays</p>
                    <p className="mb-3">• Mondays</p>
                    <p className="mb-3">• Tuesdays</p>
                    <p className="mb-3">• Wednesdays</p>

                    <Image
                      src={Ribbon}
                      alt="ribbon"
                      className="absolute bottom-0 right-0"
                    />
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-[285px] bg-[#2C5364] border border-[#203A43]" />
                <div className="absolute  w-full bottom-0 right-0  mr-[8px]">
                  <div className="relative h-[285px] mb-[8px] bg-[#fff] border-[1px] border-[#203A43] p-6">
                    <h4 className="mb-3">Full & weekend boarding programme</h4>
                    <p className="mb-3">• For children between 10-17 years</p>
                    <p className="mb-3">• Duration: 2-3 years</p>
                    <p className="mb-3">• Official language: Arabic</p>

                    <Image
                      src={Ribbon}
                      alt="ribbon"
                      className="absolute bottom-0 right-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-left md:w-9/12 mt-20 mb-28 px-5">
            <p className="text-[#2C5364]">
              As spaces are limited, we advice you to enroll now to avoid
              disappointment. <br /> If you have any problem enrolling online,
              please contact us on +23497342972
            </p>
            <p className="text-[#2C5364] mt-[15px]">
              We give our students the time and focus that they need to be
              proficient in reading and reciting from memory with our teacher to
              student ratio.
            </p>
          </div>
        </div>
        <div className="h-[30px] bg-[#2C5364] " />
      </section>
    </main>
  );
}
