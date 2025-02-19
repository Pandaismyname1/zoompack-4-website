import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Extra Performance | Zoompack 4",
  description: "Boost your Zoompack 4 performance with GraalVM and optimized JVM flags.",
}

export default function ExtraPerformancePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8 text-foreground">⚡ Extra Performance</h1>
      <div className="prose prose-lg dark:prose-invert">
        <p>For extra performance you can install GraalVM & set a few flags</p>

        <h2 className="text-2xl font-semibold mb-4">☕ GraalVM Java Runtime</h2>
        <ol className="list-decimal pl-6 space-y-4">
          <li>
            Download from{" "}
            <a
              href="https://download.oracle.com/graalvm/17/latest/graalvm-jdk-17_windows-x64_bin.zip"
              target="_blank"
              rel="noopener noreferrer"
            >
              this link
            </a>
          </li>
          <li>
            Create a folder under C: named <strong>FastestJavaAlive</strong>
          </li>
          <li>Extract the downloaded zip file under C:/FastestJavaAlive</li>
          <li>
            Check if under the C:/FastestJavaAlive, you have a folder named <strong>graalvm-jdk-17...</strong>
          </li>
          <li>
            Open the folder, and go into <strong>bin</strong>, find the file named <strong>javaw</strong>, right click
            and click on "Copy as Path"
          </li>
          <li>
            <strong>Remove the quotes at the beginning and the end of the pasted text.</strong>
          </li>
          <li>In Prism Launcher from the top bar, open Settings, navigate to Java and paste in the Java path field</li>
          <li>Close the window and you are ready to go.</li>
        </ol>

        <h2 className="text-2xl font-semibold mb-4">🏁 JVM Flags</h2>
        <p>
          These are designed to work with ☕GraalVM. <strong>Do not use them if you don't use ☕GraalVM</strong>
        </p>
        <ol className="list-decimal pl-6 space-y-4">
          <li>In Prism Launcher from the top bar, open Settings, navigate to Java</li>
          <li>In the JVM arguments field, paste the following:</li>
        </ol>
        <div className="bg-orange-200 p-4 m-4 rounded">
          <code>
            -XX:+UnlockExperimentalVMOptions -XX:+UseJVMCICompiler -XX:+UnlockDiagnosticVMOptions -Dterminal.jline=false
            -Dterminal.ansi=true -Djline.terminal=jline.UnsupportedTerminal -Dlog4j2.formatMsgNoLookups=true
            -XX:+AlwaysActAsServerClassMachine -XX:+AlwaysPreTouch -XX:+DisableExplicitGC -XX:+UseNUMA
            -XX:AllocatePrefetchStyle=3 -XX:NmethodSweepActivity=1 -XX:ReservedCodeCacheSize=400M
            -XX:NonNMethodCodeHeapSize=12M -XX:ProfiledCodeHeapSize=194M -XX:NonProfiledCodeHeapSize=194M
            -XX:+PerfDisableSharedMem -XX:+UseFastUnorderedTimeStamps -XX:+UseCriticalJavaThreadPriority -XX:+EagerJVMCI
            -Dgraal.TuneInlinerExploration=1 -Dgraal.CompilerConfiguration=enterprise -XX:+UseG1GC
            -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions
            -XX:+UnlockDiagnosticVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=30
            -XX:G1MaxNewSizePercent=40 -XX:G1HeapRegionSize=16M -XX:G1ReservePercent=20 -XX:G1HeapWastePercent=5
            -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 -XX:G1MixedGCLiveThresholdPercent=90
            -XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem
            -XX:MaxTenuringThreshold=1 -XX:+UseStringDeduplication -XX:+UseFastUnorderedTimeStamps -XX:+UseAES
            -XX:+UseAESIntrinsics -XX:+UseFMA -XX:+UseLoopPredicate -XX:+RangeCheckElimination -XX:+EliminateLocks
            -XX:+DoEscapeAnalysis -XX:+UseCodeCacheFlushing -XX:+SegmentedCodeCache -XX:+UseFastJNIAccessors
            -XX:+OptimizeStringConcat -XX:+UseCompressedOops -XX:+UseThreadPriorities -XX:+OmitStackTraceInFastThrow
            -XX:+TrustFinalNonStaticFields -XX:ThreadPriorityPolicy=1 -XX:+UseInlineCaches -XX:+RewriteBytecodes
            -XX:+RewriteFrequentPairs -XX:+UseNUMA -XX:-DontCompileHugeMethods -XX:+UseFPUForSpilling -XX:+UseVectorCmov
            -XX:+UseXMMForArrayCopy -XX:+UseLargePages -Dfile.encoding=UTF-8 -Xlog:async
            -Djava.security.egd=file:/dev/urandom --add-modules jdk.incubator.vector
          </code>
        </div>
        <ol start={3} className="list-decimal pl-6 space-y-4">
          <li>Close the window and you are ready to go.</li>
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

