import { SERVICES } from "@/config/services";
import { Grid } from "@chakra-ui/react";
import { ServicesListItem } from "./Item";

export const ServicesList = () => (
  <Grid w="100%" justifyItems="center" alignItems="top" rowGap="12" gap="4" templateColumns={["1fr", "repeat(2, 1fr)", null, "repeat(3, 1fr)"]}>
    {SERVICES.map((item, index) => (
      <ServicesListItem key={index} order={index} service={item} />
    ))}
  </Grid>
);
