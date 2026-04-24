import logoBlack from '../assets/logo_black.png';

export default function StandXBrand() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-8 w-8 items-center justify-center overflow-hidden bg-[#00ff38]">
        <img src={logoBlack} alt="StandX" className="block h-[21px] w-auto" />
      </div>

      <span className="text-[24px] font-semibold tracking-[-0.03em] text-[#00ff2a] sm:text-[28px]">
        StandX
      </span>
    </div>
  );
}
