import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/breadcrumb';
import React from 'react';
import PropTypes from 'prop-types';

const PaginationCrumbs = ({ pageNumber, setPageNumber }) => {
  const handleClick = (value) => {
    setPageNumber(value);
  };
  return (
    <div>
        <Breadcrumb>
            <BreadcrumbItem>
                <BreadcrumbLink onClick={handleClick}>{pageNumber}</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    </div>
  );
};

PaginationCrumbs.propTypes = {
  pageNumber: PropTypes.string.isRequired,
  setPageNumber: PropTypes.func.isRequired

};

export default PaginationCrumbs;
