import React, { useMemo, useState } from "react";
import Spline from "@splinetool/react-spline";

function SplineHero({ sceneUrl }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasRuntimeError, setHasRuntimeError] = useState(false);

  const url = useMemo(() => {
    return sceneUrl || "https://prod.spline.design/IkJFgO7IHQkBTN0E/scene.splinecode";
  }, [sceneUrl]);

  const looksLikeExportUrl = useMemo(() => {
    if (!url) return false;
    return /^https?:\/\//i.test(url) && (url.includes('spline') || url.includes('.splinecode'));
  }, [url]);

  const looksLikeEditorUrl = useMemo(() => {
    if (!url) return false;
    return /https?:\/\/(www\.)?app\.spline\.design\//i.test(url);
  }, [url]);

  if (!url) {
    return (
      <div className="glass-panel h-[420px] w-full rounded-3xl p-6 flex flex-col justify-center">
        <div className="text-sm uppercase tracking-widest text-white/70">3D Scene</div>
        <div className="mt-2 text-2xl font-semibold text-white">
          Add your Spline scene URL
        </div>
        <div className="mt-3 text-white/70 leading-relaxed">
          Set <span className="font-mono text-white/90">VITE_SPLINE_SCENE_URL</span> in a
          <span className="font-mono text-white/90"> .env</span> file at the project root.
        </div>
        <div className="mt-6 rounded-2xl bg-white/5 border border-white/10 p-4 text-white/70 text-sm">
          Example: <span className="font-mono text-white/90">VITE_SPLINE_SCENE_URL=https://prod.spline.design/...</span>
        </div>
      </div>
    );
  }

  if (!looksLikeExportUrl) {
    return (
      <div className="glass-panel h-[420px] w-full rounded-3xl p-6 flex flex-col justify-center">
        <div className="text-sm uppercase tracking-widest text-white/70">3D Scene</div>
        <div className="mt-2 text-2xl font-semibold text-white">
          Your URL doesn’t look like an exported Spline scene
        </div>
        <div className="mt-3 text-white/70 leading-relaxed">
          This component needs the exported URL that ends with
          <span className="font-mono text-white/90"> .splinecode</span> (usually from
          <span className="font-mono text-white/90"> prod.spline.design</span>).
        </div>

        {looksLikeEditorUrl ? (
          <div className="mt-4 rounded-2xl bg-amber-400/10 border border-amber-300/20 p-4 text-amber-100/90 text-sm leading-relaxed">
            You pasted an editor link:
            <span className="block mt-2 font-mono text-amber-100 break-all">{url}</span>
            Open your scene in Spline → <b>Export</b> (or <b>Embed</b>) → copy the URL like:
            <span className="block mt-2 font-mono text-amber-100 break-all">https://prod.spline.design/…/scene.splinecode</span>
          </div>
        ) : (
          <div className="mt-4 rounded-2xl bg-white/5 border border-white/10 p-4 text-white/70 text-sm leading-relaxed">
            Current value:
            <span className="block mt-2 font-mono text-white/85 break-all">{url}</span>
          </div>
        )}

        <div className="mt-5 text-white/60 text-sm">
          Also make sure your scene is published/public, then restart the dev server after editing
          <span className="font-mono text-white/80"> .env</span>.
        </div>
      </div>
    );
  }

  if (hasRuntimeError) {
    return (
      <div className="glass-panel h-[420px] w-full rounded-3xl p-6 flex flex-col justify-center">
        <div className="text-sm uppercase tracking-widest text-white/70">3D Scene</div>
        <div className="mt-2 text-2xl font-semibold text-white">Spline failed to render</div>
        <div className="mt-3 text-white/70 leading-relaxed">
          Double-check the scene URL is public and ends with
          <span className="font-mono text-white/90"> .splinecode</span>.
        </div>
        <div className="mt-4 rounded-2xl bg-white/5 border border-white/10 p-4 text-white/70 text-sm">
          Scene: <span className="font-mono text-white/85 break-all">{url}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative spline-wrap glass-panel h-[420px] w-full rounded-3xl overflow-hidden">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center text-white/70">
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
            <span className="inline-block h-3 w-3 rounded-full bg-cyan-300/80 animate-pulse" />
            Loading 3D scene…
          </div>
        </div>
      )}
      <Spline
        key={url}
        scene={url}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasRuntimeError(true)}
      />
    </div>
  );
}

export default SplineHero;
