import { Grid } from "@chakra-ui/react";
import { Service } from "../types";
import { ServicesListItem } from "./Item";

export interface ServicesListProps {
  /** list of services */
  services: Service[];
}

export const ServicesList = ({ services }: ServicesListProps) => (
  <Grid w="100%" justifyItems="center" alignItems="top" rowGap="12" gap="4" templateColumns={["1fr", "repeat(2, 1fr)", null, "repeat(3, 1fr)"]}>
    {services.map((item, index) => (
      <ServicesListItem key={index} order={index} service={item} />
    ))}
  </Grid>
);
