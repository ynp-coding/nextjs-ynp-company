export function formatDate(input?: string) {
  if (!input) return "";
  try {
    // try format as YYYY-MM-DD or ISO
    const d = new Date(input);
    if (isNaN(d.getTime())) return input; // already formatted
    return d.toLocaleDateString("th-TH", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  } catch {
    return input;
  }
}

export function parseThaiDate(thaiDate: string): Date {
  const months: Record<string, number> = {
    มกราคม: 0,
    กุมภาพันธ์: 1,
    มีนาคม: 2,
    เมษายน: 3,
    พฤษภาคม: 4,
    มิถุนายน: 5,
    กรกฎาคม: 6,
    สิงหาคม: 7,
    กันยายน: 8,
    ตุลาคม: 9,
    พฤศจิกายน: 10,
    ธันวาคม: 11,
  };

  const parts = thaiDate.trim().split(" "); // ["5","กันยายน","2568"]
  if (parts.length < 3) return new Date(thaiDate);

  const day = parseInt(parts[0], 10);
  const month = months[parts[1]];
  let year = parseInt(parts[2], 10);

  // ถ้าเป็น พ.ศ. (> 2400) ให้ลบ 543 → ค.ศ.
  if (year > 2400) {
    year -= 543;
  }

  return new Date(year, month, day);
}
