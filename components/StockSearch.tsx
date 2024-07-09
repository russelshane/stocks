import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogCancel,
} from "./ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { PlusIcon, Table } from "lucide-react";
import { useState } from "react";
import { searchSymbols } from "../lib/api/stock-api";
import { useStockContext } from "../util/stockContext";
import { Input } from "./ui/input";

export function StockSearch() {
  const { state, dispatch } = useStockContext();
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState<string>();
  const [searchResults, setSearchResults] = useState<any>();

  const handleSearch = async (q: string) => {
    await setLoading(true);
    await searchSymbols(q).then((data) => {
      setSearchResults(data.result);
      setLoading(false);
    });
    setSearchInput(q);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>
          <PlusIcon className="mr-2 h-4 w-4" />
          Add Item
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Search</AlertDialogTitle>
          <AlertDialogDescription>
            <Input
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search stocks... (e.g. symbol, ISIN, name)"
            />

            {loading && <span className="my-10">Searching...</span>}
            <div className="my-6 flex flex-col gap-4">
              {searchResults &&
                searchResults.splice(0, 8).map((val: any, index: any) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <div className="flex gap-2 items-center">
                      <span className="text-lg font-semibold">
                        {val.description}
                      </span>
                      <span className="bg-orange text-white p-2 rounded-md text-sm">
                        {val.symbol}
                      </span>
                    </div>

                    <AlertDialogCancel
                      onClick={async () => {
                        await dispatch({
                          type: "ADD_STOCK",
                          payload: {
                            id: index,
                            name: val.description,
                            symbol: val.symbol,
                            weight: 0,
                          },
                        });
                      }}
                    >
                      <PlusIcon className="mr-2 h-4 w-4" />
                      Add to List
                    </AlertDialogCancel>
                  </div>
                ))}
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}
