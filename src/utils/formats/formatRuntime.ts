const formatRuntime = (runtime: number | null): string => {
  if (runtime === null || isNaN(runtime)) return "N/A";

  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  return `${hours}h ${minutes}m`;
};

export default formatRuntime;
