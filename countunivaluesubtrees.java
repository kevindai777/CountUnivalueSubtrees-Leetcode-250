//Java Solution

class Solution {
    public int countUnivalSubtrees(TreeNode root) {
        int count = 0;
        count = dfs(root, count);
        return count;
    }
    
    private int dfs(TreeNode node, Integer count) {
        if (node == null) {
            return count;
        }
        
        if (isUnival(node, node.val)) {
            count++;
        }
        
        count = dfs(node.left, count);
        count = dfs(node.right, count);
        
        return count;
    }
    
    private boolean isUnival(TreeNode node, Integer value) {
        if (node == null) {
            return true;
        }
        
        if (node.left == null && node.right == null && node.val == value) {
            return true;
        }
        
        return node.val == value && isUnival(node.left, value) && isUnival(node.right, value);
    }
}