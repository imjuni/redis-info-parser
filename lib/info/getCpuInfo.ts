import ICPUInfo from '@info/interfaces/ICPUInfo';
import { TINFO_SECTION } from '@parser/interfaces/TINFO_SECTION';
import parseStage2 from '@parser/parseStage2';

export default function getCpuInfo(stage02Data: ReturnType<typeof parseStage2>) {
  const section = stage02Data[TINFO_SECTION.CPU];

  const cpuInfo: ICPUInfo = {
    used_cpu_sys: section.used_cpu_sys,
    used_cpu_user: section.used_cpu_user,
    used_cpu_sys_children: section.used_cpu_sys_children,
    used_cpu_user_children: section.used_cpu_user_children,
  };

  return cpuInfo;
}
