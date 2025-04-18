import { singleLine, type TextDisplaySettings } from "@keybr/textinput";
import { StaticText } from "@keybr/textinput-ui";
import { memo, useMemo } from "react";
import {
  generateExample,
  type TextGenerator,
} from "../../../generators/index.ts";

export const TextPreview = memo(function TextPreview({
  settings,
  textGenerator,
}: {
  settings: TextDisplaySettings;
  textGenerator: TextGenerator;
}) {
  const text = useMemo(() => generateExample(textGenerator), [textGenerator]);
  return <StaticText settings={settings} lines={singleLine(text)} />;
});
