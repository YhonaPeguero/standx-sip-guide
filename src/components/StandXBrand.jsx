import logoBlack from '../assets/logo_black.png';

export default function StandXBrand() {
  return (
    <div className="flex min-w-0 items-center gap-2">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden bg-[#00ff38]">
        <img src={logoBlack} alt="StandX" className="block h-[21px] w-auto" />
      </div>

      <span className="truncate text-[22px] font-semibold tracking-[-0.03em] text-[#00ff2a] sm:text-[24px] lg:text-[28px]">
        StandX
      </span>
    </div>
  );
}
