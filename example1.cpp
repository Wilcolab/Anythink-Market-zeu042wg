#include <cassert>
#include <iostream>
using namespace std;

int main() {
    int a = 5;
    int b = 5;
    
    assert(a == b);  // Program continues only if a == b
    cout << "a and b are equal" << endl;
    
    return 0;
}