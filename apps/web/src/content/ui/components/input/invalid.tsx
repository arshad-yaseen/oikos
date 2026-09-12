import { Input } from "@oikos/ui/components/input";

export function Invalid() {
  return <Input aria-label="Email" data-invalid defaultValue="not-an-email" className="w-64" />;
}
