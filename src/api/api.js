import { listUrl } from "../config/dataConfing";
export const fetchList = async () => {
  const url = `${listUrl}/5ecdc6313000007500ea0c21?mocky-delay=300ms`;

  const res = await fetch(url);

  if (res.status !== 200) return null;

  const d = res.json();

  return d;
};
