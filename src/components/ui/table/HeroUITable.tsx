"use client";

import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@heroui/react";

type HeroUITableProps = {
  html: string;
};

export default function HeroUITable({ html }: HeroUITableProps) {
  if (!html) return null;

  // ตรวจสอบ environment
  if (typeof window === "undefined") return null;

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const table = doc.querySelector("table");
  if (!table) return <p>No table found</p>;

  const rows = Array.from(table.querySelectorAll("tr"));
  if (rows.length === 0) return <p>Empty table</p>;

  const headerCells = Array.from(rows[0].querySelectorAll("th, td"));
  const bodyRows = rows.slice(1);

  return (
    <Table aria-label="Table" selectionMode="single">
      <TableHeader>
        {headerCells.map((cell, idx) => (
          <TableColumn key={idx}>{cell.textContent}</TableColumn>
        ))}
      </TableHeader>
      <TableBody>
        {bodyRows.map((row, rIdx) => (
          <TableRow key={rIdx}>
            {Array.from(row.querySelectorAll("td")).map((cell, cIdx) => (
              <TableCell key={cIdx}>{cell.textContent}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
