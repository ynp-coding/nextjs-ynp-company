"use client";

import { Tabs, Tab, Card, CardBody, CardHeader, Divider } from "@heroui/react";
import { Bitcoin } from "lucide-react";

export default function CardProcurement() {
  return (
    <Card>
      <CardHeader>
        <Bitcoin className="size-5 shrink-0" aria-hidden />
        <div className="flex-1">
          <h2 className="text-lg sm:text-xl font-semibold leading-tight">
            ประกาศจัดซื้อจัดจ้าง
          </h2>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="flex w-full flex-col">
        <Tabs aria-label="Options" isVertical={true} size="lg">
          <Tab key="plan-procurement" title="แผนจัดซื้อจัดจ้าง">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Tab>

          <Tab key="center-procurement" title="ประกาศราคากลาง">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Tab>

          <Tab key="des-procurement" title="ประกาศร่างคุณลักษณะ">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Tab>
          <Tab key="pay-procurement" title="ประกาศจัดซื้อจัดจ้าง">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Tab>
          <Tab key="post-procurement" title="ประกาศผลจัดซื้อจัดจ้าง">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Tab>
          <Tab key="total-procurement" title="สรุปผลการจัดซื้อจัดจ้าง">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Tab>
          <Tab key="market" title="ประกาศขายทอดตลาด">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </Tab>
        </Tabs>
      </CardBody>
    </Card>
  );
}
