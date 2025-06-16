import { useState } from "react";

export default function ChessBoard() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-8 grid-rows-8 w-[640px] h-[640px] border border-gray-300">
        {Array.from({ length: 64 }).map((_, index) => {
          const isBlack = Math.floor(index / 8) % 2 === index % 2;
          const isHighlighted = selectedIndex === index;
          const x = ["A", "B", "C", "D", "E", "F", "G", "H"][Math.floor(index / 8)];
          const coord = x + (index % 8 + 1).toString();
          const mapping = new Map([
            ["A1", '♖'], 
            ["A8", '♖'], 
            ["A2", '♘'], 
            ["A7", '♘'], 
            ["A3", '♗'], 
            ["A6", '♗'], 
            ["A4", '♕'], 
            ["A5", '♔'], 
            ["B1", '♙'], 
            ["B2", '♙'], 
            ["B3", '♙'], 
            ["B4", '♙'], 
            ["B5", '♙'], 
            ["B6", '♙'], 
            ["B7", '♙'], 
            ["B8", '♙'],
            ["H1", '♜'],
            ["H8", '♜'],
            ["H2", '♞'],
            ["H7", '♞'],
            ["H3", '♝'],
            ["H6", '♝'],
            ["H4", '♛'],
            ["H5", '♚'],
            ["G1", '♟'],
            ["G2", '♟'],
            ["G3", '♟'],
            ["G4", '♟'],
            ["G5", '♟'],
            ["G6", '♟'],
            ["G7", '♟'],
            ["G8", '♟']   
            
          ]);
          return (
            <ChessBoardSquare
              key={index}
              index={index}
              isBlack={isBlack}
              isHighlighted={isHighlighted}
              coord={coord}
              pieceType={mapping.get(coord) || ""}
        
              onSelect={() => setSelectedIndex(index)}
            />
          );
        })}
      </div>
    </div>
  );
}

type SquareInfo = {
  index: number;
  isHighlighted: boolean;
  isBlack: boolean;
  pieceType: string;
  coord: string;
  onSelect: () => void;
};

const ChessBoardSquare = ({
  isBlack,
  isHighlighted,
  index,
  pieceType,
  coord,
  onSelect,
}: SquareInfo) => {
  const baseColour = isBlack ? "bg-gray-600 text-white" : "bg-white text-black";
  const overrideColour = isHighlighted ? "bg-green-500" : baseColour;
  
  return (
    <div
      className={`w-full h-full p-2 text-xs ${overrideColour} flex `}
      onClick={() => {
        console.log(`Clicked on square: ${coord}`);
        console.log(`Piece type: ${pieceType}`);
        onSelect();
      }}
    >

    <div
      className="text-right">
        {coord}
    </div>
      
    <div className="flex-1 flex items-center  justify-center text-3xl">
      {pieceType }
    </div>
      
    </div>


  );
};