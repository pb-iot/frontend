{
  description = "pb-iot frontend";

  inputs = {
    nixpkgs.url = github:NixOS/nixpkgs/nixos-unstable;
    flake-utils = {
      url = "github:numtide/flake-utils";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs = inputs: with inputs; flake-utils.lib.eachDefaultSystem (system: let
    pkgs = import nixpkgs { inherit system; };
    lib = nixpkgs.lib;
  in {
    devShell = pkgs.mkShell {
      buildInputs = with pkgs; [
        nodejs_20
        corepack_20
      ];
    };
  });
}
