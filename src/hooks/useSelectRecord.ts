import { useCallback, useState } from "react";

import record from "../data/Record.json";
import { Record } from "../types/record";

type Props = {
  townName: string;
  onOpen: () => void;
}

export const useSelectRecords = () => {
  const [selectedRecords, setSelectedRecords] = useState<Array<Record> | []>([]);

  const onSelectRecords = useCallback((props: Props) => {
    const { townName, onOpen } = props;

    const targetRecords = record.filter(({area}) => area.includes(townName))
    setSelectedRecords(targetRecords);
    onOpen();
  }, [])

  return { onSelectRecords, selectedRecords }
};
