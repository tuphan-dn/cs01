import { Leaf } from './leaf'
import { Node } from './node'

/**
 * The merkle. By the tree, people can generate the proof and locally verify the proof.
 */
export class Tree {
  /**
   * The list of leaves.
   */
  public readonly leaves

  /**
   * Tree constructor.
   * @param leaves The list of <address,amount> represented as leaves.
   */
  constructor(leaves: Leaf[]) {
    this.leaves = leaves.sort((a, b) => a.gte(b))
  }

  /**
   * The merkle root.
   */
  get root(): Node {
    // TODO
  }

  /**
   * Generate the proof.
   * @param leaf Leaf.
   * @returns Proof - The list of nodes.
   */
  prove(leaf: Leaf): Node[] {
    // TODO
  }

  /**
   * Verify the proof.
   * @param leaf The receiver info represented as a leaf.
   * @param proof The proof to the leaf.
   * @returns true/false
   */
  verify(leaf: Leaf, proof: Node[]): boolean {
    // TODO
  }
}
