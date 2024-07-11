/**
 * v0 by Vercel.
 * @see https://v0.dev/t/EwDRAQ4ulGz
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Landing() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Convert Music to Dombyra Tabs
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Our powerful music-to-tabs AI conversion tool makes it easy to get Dombyra tabs for your favorite
                    melody. Simply upload your melody and let us do the rest.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="record"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-black px-8 text-sm font-medium text-white shadow transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Convert Music
                  </Link>
                </div>
              </div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Kazakh_Dombra2.png"
                width="550"
                height="550"
                alt="Hero"
                className="object-scale-down max-h-full mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Powerful Music-to-Tabs Conversion</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our advanced algorithm accurately converts a wide range of music formats into high-quality Dombyra
                  tabs, making it easy for you to learn and play your favorite songs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Supported Formats</h3>
                      <p className="text-muted-foreground">Convert MP3, MIDI, and WAV files to Dombyra tabs.</p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Accurate Tabs</h3>
                      <p className="text-muted-foreground">
                        Our algorithm ensures the tabs accurately represent the original music.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Easy to Use</h3>
                      <p className="text-muted-foreground">
                        Simply upload your music and let us do the rest. No complex setup required.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src="https://tengrinews.kz/userdata/news/2023/news_512438/resize/photo_446047.jpeg"
                width="550"
                height="310"
                alt="Features"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Users Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our satisfied customers about their experience with our music-to-tabs conversion tool.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-4">
                  <div className="flex flex-col items-start space-y-2 rounded-lg bg-muted p-4">
                    <p className="text-muted-foreground">
                      "I've been using this tool for months and it's been a game-changer for my Dombyra playing. The
                      tabs are incredibly accurate and easy to follow."
                    </p>
                    <div className="flex items-center space-x-2">
                      <img
                        src="https://el.kz/storage/storage/element/2022/09/07/mainphoto/21593/1200xauto_2CatMz3cf4NoxTnXLOudVmLmDwr4x2Gh2G0phVjy.jpg"
                        width="40"
                        height="40"
                        alt="Avatar"
                        className="h-10 w-10 rounded-full"
                      />
                      <div>
                        <p className="font-medium">Sanzhar Ashirbekov</p>
                        <p className="text-xs text-muted-foreground">Dombyra Enthusiast</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start space-y-2 rounded-lg bg-muted p-4">
                    <p className="text-muted-foreground">
                      "I was skeptical at first, but this tool has completely transformed the way I learn new Dombyra
                      pieces. It's saved me so much time and effort."
                    </p>
                    <div className="flex items-center space-x-2">
                      <img
                        src="https://www.kino-teatr.ru/acter/foto/post/232216.jpg"
                        width="40"
                        height="40"
                        alt="Avatar"
                        className="h-10 w-10 rounded-full"
                      />
                      <div>
                        <p className="font-medium">Zhassulan Kainazarov</p>
                        <p className="text-xs text-muted-foreground">Music Teacher</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                src="https://el.kz/storage/storage/element/2022/09/07/mainphoto/21593/1200xauto_2CatMz3cf4NoxTnXLOudVmLmDwr4x2Gh2G0phVjy.jpg"
                width="550"
                height="310"
                alt="Testimonials"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
      </main>
      
    </div>
  )
}

function Music2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="18" r="4" />
      <path d="M12 18V2l7 4" />
    </svg>
  )
}