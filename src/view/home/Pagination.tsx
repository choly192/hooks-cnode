import { Pagination } from "antd";
import React, { FC } from "react";

export interface PaginationCompProps {
  getCurrentPage: (page: number) => void;
  totalCount: number;
  pageSize: number;
  currentPage: number;
}

export const PaginationComp: FC<PaginationCompProps> = (props) => {
  return (
    <div className="pagination-container">
      <Pagination
        current={props?.currentPage}
        total={props?.totalCount}
        defaultPageSize={props?.pageSize}
        onChange={props?.getCurrentPage}
        showSizeChanger={false}
      />
    </div>
  );
};
PaginationComp.displayName = "PaginationComp";
