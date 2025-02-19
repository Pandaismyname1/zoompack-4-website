import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Installing Zoompack 4 with Prism Launcher | Zoompack 4",
  description: "Learn how to install Zoompack 4 using Prism Launcher for the best Minecraft experience.",
}

export default function InstallingZoompack4Page() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8 text-foreground"> 🚀 Installing Zoompack 4 with Prism Launcher</h1>
      <div className="prose prose-lg dark:prose-invert">
        <p>
          Installing Zoompack 4 is easy with Prism Launcher. Follow the steps below to get started with the ultimate
          Minecraft experience.
        </p>
        <br/>
        <ol className="list-decimal pl-6 space-y-4">
          <li>
            Install{" "}
            <a href="https://aka.ms/vs/17/release/vc_redist.x64.exe" target="_blank" rel="noopener noreferrer">
              MS Visual C++ 17 Redist
            </a>{" "}
            if you do not have it already. <strong>Also make sure you have ☕ Java 17 installed.</strong> If you don't,
            you'll have to install it or, install ☕ GraalVM from the <strong>Extra Performance</strong> post.
          </li>
          <li>
            Install Prism Launcher from{" "}
            <a href="https://prismlauncher.org/download/?from=button" target="_blank" rel="noopener noreferrer">
              this link
            </a>
            . We recommend using the installer. If unsure which version to install, go with{" "}
            <strong>Installer (.exe)</strong>
          </li>
          <li>Follow the setup process.</li>
          <li>Once installed, select your language. This guide is in English, so English is recommended.</li>
          <li>
            Next you will be prompted to select a Java version. If you have played Minecraft before, you should see an
            entry for Version 17 something. If not, please install GraalVM, installation steps are linked below.
          </li>
          <li>
            RAM configuration. This step depends on your machine. Leave Minimum Memory Allocation as it is. Next we will
            configure Maximum Memory Allocation based on your system:
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>6GB System RAM - allocate 3500 MiB</li>
              <li>8GB System RAM - allocate 4096 MiB</li>
              <li>12GB System RAM - allocate 6000 MiB</li>
              <li>16GB System RAM and beyond - allocate 8192MiB</li>
            </ul>
          </li>
          <li>Customize the UI to your heart's content and click Finish.</li>
          <li>
            If you have a Minecraft Account, skip to <strong>step 12</strong>, If you don't continue with{" "}
            <strong>step 9</strong>
          </li>
          <li>Click the Accounts button on the Top Right corner, and click Manage Accounts</li>
          <li>
            Add your Microsoft or Offline account. Once added set it as a default by right clicking the account. Close
            this window.
          </li>
          <li>
            On the top bar, click on <strong>Add Instance</strong>
          </li>
          <li>On the new window, select Curseforge on the left sidebar.</li>
          <li>
            Search for <em>Zoompack 4</em>, click it, and go to Version Select. Select the latest version based on your
            System. If you know your system is not that good, go with POTATO version, otherwise go with FULL version.
            Click OK.
          </li>
          <li>
            Wait a bit until you will see a window named "Blocked mods found". Click on <strong>Open Missing</strong>
          </li>
          <li>
            Your browser will show up with a few tabs. Go to each of the tabs, and wait around 5 seconds for the each
            file to download. If prompted, save them in your downloads folder
          </li>
          <li className="font-bold text-red-500">
            IMPORTANT: Check that all of the links in the "Blocked mods found" window are{" "}
            <span className="text-green-500">GREEN</span>, and you have no missing mods.
          </li>
          <li>Click OK. Wait a bit and you're done.</li>
          <li>Double click the modpack and it will start.</li>
        </ol>
      </div>
      <div className="mt-12">
        <Link href="/articles" className="text-primary hover:underline">
          ← Back to Articles
        </Link>
      </div>
    </article>
  )
}

